import * as constants from "../../constants";

import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputLabel,
  Slider,
  TextField,
} from "@material-ui/core";
import React, { Dispatch, SetStateAction } from "react";

import { Search } from "models/Search";
import SearchIcon from "@material-ui/icons/Search";
import Select from "components/Select";
import { formatPrice } from "../../utils";
import { useTranslation } from "hooks/useTranslation";

interface Props {
  types?: number;
  contract?: number;
  kind?: "shop" | "building";
  bedrooms?: number;
  bathrooms?: number;
  tags?: number;
  zones?: number;
  disableContract?: boolean;
  disableKind?: boolean;
  setFilter: Dispatch<SetStateAction<Search>>;
  setPage: Dispatch<SetStateAction<number>>;
}

const SearchForm: React.FC<Props> = ({
  types = 0,
  contract = 0,
  kind,
  bedrooms = 0,
  bathrooms = 0,
  tags = 0,
  zones = 0,
  disableContract = false,
  disableKind = false,
  setFilter,
  setPage,
}) => {
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    types,
    contract,
    bedrooms,
    bathrooms,
    tags,
    zones,
    sort_by: 0,
    identifier: "",
    price: contract === 1 ? [400, 2000] : [50000, 1000000],
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handlePriceChange = (event: any, newValue: number | number[]) => {
    setState({ ...state, price: newValue as number[] });
  };

  const handleSearch = () => {
    let data: Search = {};

    if (state.identifier !== "") {
      setPage(1);

      setFilter({
        identifier: state.identifier,
        page: 1,
      });

      return;
    }

    data.kind = disableKind ? kind : constants.types[state.types].value;
    data.buyop = constants.contract[state.contract].value;
    data.bedrooms_min = constants.rooms[state.bedrooms].value;
    data.bedrooms_max = constants.rooms[state.bedrooms].value;
    data.bathrooms_min = constants.baths[state.bathrooms].value;
    data.bathrooms_max = constants.baths[state.bathrooms].value;
    data.sort_by = constants.sort_by[state.sort_by].value;
    data.min_price = state.price[0];
    data.max_price = state.price[1];

    if (state.tags !== 0) {
      data.tags = constants.tags[state.tags].value;
    }

    if (state.bedrooms === 8) {
      data.bedrooms_min = "8";
      data.bedrooms_max = "20";
    }

    if (state.bathrooms === 8) {
      data.bathrooms_min = "8";
      data.bathrooms_max = "20";
    }

    if (state.zones !== 0) {
      data.town = constants.zones[state.zones].value;
    }

    setPage(1);

    setFilter({
      ...data,
      page: 1,
    });
  };

  return (
    <Container>
      <Card className="full-search-form">
        <CardContent>
          <Grid container spacing={2}>
            {!disableContract && (
              <Grid item xs={12} sm={4}>
                <Select
                  disabled={disableContract}
                  tKey="contract"
                  label={t("constants.fields.contract")}
                  items={constants.contract}
                  value={state.contract}
                  onChange={handleChange}
                />
              </Grid>
            )}
            {!disableKind && (
              <Grid item xs={12} sm={4}>
                <Select
                  tKey="types"
                  label={t("constants.fields.type")}
                  items={constants.types}
                  value={state.types}
                  onChange={handleChange}
                />
              </Grid>
            )}
            <Grid item xs={12} sm={4}>
              <Select
                tKey="sort_by"
                label={t("constants.fields.sort_by")}
                items={constants.sort_by}
                value={state.sort_by}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                tKey="bedrooms"
                label={t("constants.fields.bedrooms")}
                items={constants.rooms}
                value={state.bedrooms}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                tKey="bathrooms"
                label={t("constants.fields.bathrooms")}
                items={constants.baths}
                value={state.bathrooms}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                tKey="tags"
                label={t("constants.fields.tags")}
                items={constants.tags}
                value={state.tags}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputLabel
                shrink
                htmlFor="identifier"
                classes={{ root: "mb-3 mt-3" }}
              >
                {t("constants.fields.identifier")}
              </InputLabel>
              <TextField
                fullWidth
                id="identifier"
                name="identifier"
                size="small"
                variant="filled"
                value={state.identifier}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                tKey="zones"
                label={t("constants.fields.zone")}
                items={constants.zones}
                value={state.zones}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputLabel
                shrink
                htmlFor="price"
                classes={{ root: "mb-3 mt-3" }}
              >
                {t("constants.fields.price")}
              </InputLabel>
              <Slider
                id="price"
                name="price"
                min={0}
                step={50}
                max={contract === 1 ? 2000 : 1000000}
                valueLabelDisplay="off"
                value={state.price}
                onChange={handlePriceChange}
                aria-labelledby="range-slider"
              />
              {`${formatPrice(state.price[0])} - ${formatPrice(
                state.price[1]
              )}`}
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="color-white"
                startIcon={<SearchIcon />}
                onClick={handleSearch}
              >
                {t("search")}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SearchForm;
