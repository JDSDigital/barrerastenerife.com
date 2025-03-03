import * as constants from "witeiConstants";

import {
  Button,
  Card,
  CardContent,
  Collapse,
  Container,
  Grid,
  InputLabel,
  Slider,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Dispatch, SetStateAction } from "react";

import { Search } from "models/Search";
import SearchIcon from "@material-ui/icons/Search";
import Select from "components/Select";
import { TownSearch } from "components/TownSearch";
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
  price?: [number, number];
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
  price = [0, 50000000],
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
    price,
    town: "",
  });

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
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

    if (state.town !== "") {
      data.town = state.town;
    }

    setPage(1);

    setFilter({
      ...data,
      page: 1,
    });
  };

  const handleZoneChange = (value: string) =>
    setState({ ...state, town: value });

  return (
    <Container>
      <Card className="full-search-form">
        <CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
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
              {/* <Grid item xs={12} sm={4}>
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
              </Grid> */}
            </Grid>
          </Collapse>
          <Grid container spacing={2} className="mt-5">
            <Grid item xs={12}>
              <Typography align="center">
                <Button
                  size="large"
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  {t(`properties.search.${expanded ? "hide" : "show"}`)}
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TownSearch value={state.town} onChange={handleZoneChange} />
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
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
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SearchForm;
