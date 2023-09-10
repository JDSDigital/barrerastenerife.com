import * as Portal from "@radix-ui/react-portal";

import {
  Button,
  TextField,
  TextFieldProps,
  Typography,
  styled,
} from "@material-ui/core";
import { Popper, PopperAnchor, PopperContent } from "@radix-ui/react-popper";
import React, { useRef } from "react";

import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { useId } from "@radix-ui/react-id";
import { useCombobox } from "downshift";
import { useTranslation } from "hooks/useTranslation";

export type AutocompleteProps<T> = Omit<
  TextFieldProps,
  "onChange" | "defaultValue"
> & {
  items?: T[];
  onChange: (value: string, item?: T | null) => void;
  onItemSelected?: (item?: T | null) => void;
  displayFormatter?: (item: T) => string | JSX.Element;
  optionFormatter?: (item: T) => string | JSX.Element;
  itemToValue?: (item: T) => string | number;
  itemToLabel?: (item: T | null) => string;
  loading?: boolean;
  defaultValue?: T;
  noMatchesText?: string;
  onSubmit?: () => void;
};

export function Autocomplete<T>({
  id,
  label,
  items = [],
  onChange,
  onItemSelected,
  defaultValue,
  loading = false,
  noMatchesText,
  disabled,
  optionFormatter,
  itemToValue = selectedItem => selectedItem as unknown as string,
  itemToLabel = selectedItem => selectedItem as unknown as string,
  onSubmit,
  ...rest
}: AutocompleteProps<T>) {
  const { t } = useTranslation();
  const autocompleteId = useId(id);
  const textFieldRef = useRef(null);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    selectedItem,
    inputValue,
    openMenu,
  } = useCombobox({
    id: autocompleteId,
    labelId: `${autocompleteId}-label`,
    items,
    defaultSelectedItem: defaultValue,
    itemToString: itemToLabel,
    onSelectedItemChange: ({ inputValue, selectedItem }) => {
      onChange(inputValue!, selectedItem);
      onItemSelected?.(selectedItem);
      onSubmit?.();
    },
    onInputValueChange: ({ inputValue }) => {
      onChange(inputValue!);

      if (inputValue === "") {
        onItemSelected?.(null);
      }
    },
  });

  const resetInput = () => {
    onChange("");
    // @ts-ignore
    textFieldRef.current?.focus();
  };

  return (
    <Popper>
      <div {...getComboboxProps()}>
        <PopperAnchor>
          <TextField
            fullWidth
            inputRef={textFieldRef}
            id={id}
            name={id}
            label={label}
            aria-label={label}
            variant="filled"
            {...getInputProps({
              id: autocompleteId,
              disabled,
              onFocus: () => {
                if (!isOpen && items.length > 0) {
                  openMenu();
                }
              },
              onKeyDown: event => {
                if (event.key === "Enter") {
                  onSubmit?.();
                }
              },
            })}
            {...rest}
            InputProps={{
              endAdornment: onSubmit ? (
                <Button onClick={onSubmit}>
                  <SearchIcon />
                </Button>
              ) : (
                <Button onClick={resetInput}>
                  <CloseIcon />
                </Button>
              ),
            }}
          />
        </PopperAnchor>

        <Portal.Root>
          <PopperContent side="bottom" align="start" sideOffset={0}>
            <SelectList
              isopen={isOpen ? "true" : undefined}
              {...getMenuProps()}
            >
              {isOpen && (
                <>
                  {items.length === 0 ? (
                    <Typography>
                      {noMatchesText || t("common:noMatchesFound")}
                    </Typography>
                  ) : (
                    items.map((item, index) => (
                      <Option
                        key={itemToValue(item)}
                        {...getItemProps({ item: item, index })}
                        selected={
                          selectedItem && itemToValue(item) === inputValue
                        }
                        highlighted={
                          highlightedIndex === index ? "true" : undefined
                        }
                      >
                        {optionFormatter ? optionFormatter(item) : item}
                      </Option>
                    ))
                  )}
                </>
              )}
            </SelectList>
          </PopperContent>
        </Portal.Root>
      </div>
    </Popper>
  );
}

Autocomplete.displayName = "DropdownComboBox";

export const SelectList = styled("ul")((props: { isopen: boolean }) => ({
  maxHeight: "240px",
  padding: "0",
  overflow: "auto",
  backgroundColor: "white",
  borderRadius: "8px",
  listStyle: "none",
  margin: 0,
  boxShadow: "5px 5px 5px rgba(0,0,0,0.3)",

  display: props.isopen ? "block" : "none",
}));

export const Option = styled("li")(
  (props: { selected: boolean; highlighted: boolean }) => {
    const getColor = () => {
      if (props.selected) {
        return "white";
      }
    };

    const getBackgroundColor = () => {
      if (props.selected) {
        return "#1db1b8";
      }

      if (props.highlighted) {
        return "#68d2d7";
      }
    };

    return {
      padding: "12px 16px",
      cursor: "pointer",

      color: getColor(),
      backgroundColor: getBackgroundColor(),
    };
  }
);
