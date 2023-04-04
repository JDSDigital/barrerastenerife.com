import * as constants from "witeiConstants";

import { Button, Container, Grid } from "@material-ui/core";
import React, { FC, useState } from "react";

import List from "./List";
import { Search } from "models/Search";
import SearchForm from "./SearchForm";
import { useGetProperties } from "hooks/useGetProperties";
import { useTranslation } from "hooks/useTranslation";

type Props = {
  type?: number;
  contract?: number;
  kind?: "shop" | "building";
  zone?: number;
  disableContract?: boolean;
  disableKind?: boolean;
  title?: string;
  pagination?: boolean;
  search?: boolean;
  tags?: string[];
  town?: string;
  price?: [number, number];
};

export const Properties: FC<Props> = ({
  type = 0,
  contract = 0,
  kind,
  zone = 0,
  disableContract = false,
  disableKind = false,
  title,
  pagination = false,
  search = true,
  tags = [],
  town,
  price,
}) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Search>({
    kind: disableKind ? kind : constants.types[type].value,
    buyop: constants.contract[contract].value,
    town: town ? town : constants.zones[zone].value,
    min_price: price ? price[0] : constants.MIN_PRICE,
    max_price: price ? price[1] : constants.MAX_PRICE,
    page,
  });

  const { properties, status } = useGetProperties({
    page,
    tags: tags.length > 0 ? tags : [],
    filter,
  });

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  return (
    <Container maxWidth={false} disableGutters>
      {search && (
        <SearchForm
          disableContract={disableContract}
          disableKind={disableKind}
          types={type}
          contract={contract}
          zones={zone}
          price={[filter.min_price!, filter.max_price!]}
          setFilter={setFilter}
          setPage={setPage}
        />
      )}

      <List properties={properties} status={status} title={title} />

      {/* TODO: Fix pagination */}

      <Container>
        {pagination && (
          <Grid container spacing={2}>
            <Grid item xs={12} className="text-center">
              {status !== "loading" && page > 1 && (
                <Button onClick={handlePrevious} className="p-5">
                  {`< ${t("properties.previous")}`}
                </Button>
              )}
              {status !== "loading" && properties.length >= 50 && (
                <Button onClick={handleNext} className="p-5">
                  {`${t("properties.next")} >`}
                </Button>
              )}
            </Grid>
          </Grid>
        )}
      </Container>
    </Container>
  );
};
