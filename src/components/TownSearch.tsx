import * as constants from "witeiConstants";

import React, { FC } from "react";

import { Autocomplete } from "./Autocomplete";
import { useTranslation } from "hooks/useTranslation";

type TownSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
};

export const TownSearch: FC<TownSearchProps> = ({
  value,
  onChange,
  onSubmit,
}) => {
  const { t } = useTranslation();

  const towns = constants.zones.sort((a, b) => a.value.localeCompare(b.value));

  const items = towns.filter(item =>
    item.value.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <Autocomplete
      id="town"
      label={t("constants.fields.zone")}
      items={items}
      itemToValue={option => option.value}
      itemToLabel={option => option?.value ?? ""}
      optionFormatter={option =>
        Boolean(option.value) ? option.value : t("constants.zones.all")
      }
      value={value}
      onChange={value => onChange(value)}
      noMatchesText="No consigue resultados"
      onSubmit={onSubmit}
    />
  );
};

Autocomplete.displayName = "TownSearch";
