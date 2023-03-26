import * as constants from "../../constants";

import React, { FC, useState } from "react";

import { Container } from "@material-ui/core";
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
  town,
}) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Search>({
    kind: disableKind ? kind : constants.types[type].value,
    buyop: constants.contract[contract].value,
    town: town ? town : constants.zones[zone].value,
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
          setFilter={setFilter}
          setPage={setPage}
        />
      )}

      <List properties={properties} status={status} title={title} />

      {/* TODO: Fix pagination */}

      {/* <Container>
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
      </Container> */}
    </Container>
  );
};
