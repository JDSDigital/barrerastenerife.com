import * as constants from "../../constants";

import { Button, Container, Grid } from "@material-ui/core";
import { QueryStatus, useQuery } from "react-query";
import React, { FC, useState } from "react";

import List from "./List";
import { Search } from "models/Search";
import SearchForm from "./SearchForm";
import { getPropertyList } from "../../utils";
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
};

export const Properties: FC<Props> = ({
  type = 0,
  contract = 0,
  kind,
  zone = 0,
  disableContract = false,
  disableKind = false,
  title,
  pagination = true,
  search = true,
  tags = [],
}) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Search>({
    kind: disableKind ? kind : constants.types[type].value,
    buyop: constants.contract[contract].value,
    town: constants.zones[zone].value,
    page,
  });

  const {
    status,
    data,
  }: {
    status: QueryStatus;
    data: any;
  } = useQuery(["properties", [page, filter]], () =>
    getPropertyList({ page, tags: tags.length > 0 ? tags : [], ...filter })
  );

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  return (
    <Container>
      {search && (
        <SearchForm
          disableContract={disableContract}
          disableKind={disableKind}
          types={type}
          contract={contract}
          zones={zone}
          setFilter={setFilter}
          setPage={setPage}
        />
      )}

      <List properties={data?.data?.results} status={status} title={title} />

      {pagination && (
        <Grid container spacing={2}>
          <Grid item xs={12} className="text-center">
            {status !== "loading" && page > 1 && (
              <Button onClick={handlePrevious} className="p-5">
                {`< ${t("properties.previous")}`}
              </Button>
            )}
            {status !== "loading" && data?.data?.results.length === 12 && (
              <Button onClick={handleNext} className="p-5">
                {`${t("properties.next")} >`}
              </Button>
            )}
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
