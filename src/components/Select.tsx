import { InputLabel, MenuItem, TextField } from "@material-ui/core";

import React from "react";
import { useTranslation } from "hooks/useTranslation";

interface Props {
  tKey?: string;
  label: string;
  items: any;
  value: number;
  disabled?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Select: React.FC<Props> = ({
  tKey,
  label,
  items,
  value,
  disabled = false,
  onChange = () => {},
}) => {
  const { t } = useTranslation();

  return (
    <>
      <InputLabel shrink htmlFor={tKey} classes={{ root: "mb-3 mt-3" }}>
        {label}
      </InputLabel>
      <TextField
        fullWidth
        select
        disabled={disabled}
        id={tKey}
        name={tKey}
        size="small"
        variant="filled"
        value={value}
        onChange={onChange}
      >
        {items.map((item: any, index: number) => (
          <MenuItem
            key={`${tKey}-${index}`}
            value={index}
            className={item.highlight ? "highlight-item" : ""}
          >
            {t(`constants.${tKey}.${item.name}`)}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default Select;
