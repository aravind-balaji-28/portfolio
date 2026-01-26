import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MuiSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { SelectChangeEvent } from "@mui/material/Select";

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  id?: string;
  label?: string;
  value: string | number;
  options: SelectOption[];
  variant?: "filled" | "outlined" | "standard";
  className?: string;
  onChange?: (
    event: SelectChangeEvent<string | number>,
    value: string | number
  ) => void;
}

export const Select: React.FC<SelectProps> = ({
  id = "select-basic",
  label = "Age",
  value,
  options,
  variant = "outlined",
  className = "",
  onChange,
}) => {
  const labelId = `${id}-label`;

  const handleChange = (
    event: SelectChangeEvent<string | number>
  ) => {
    onChange?.(event, event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const currentIndex = options.findIndex(
      (opt) => opt.value === value
    );

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = options[currentIndex + 1];
      if (next) {
        onChange?.(
          event as unknown as SelectChangeEvent<string | number>,
          next.value
        );
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev = options[currentIndex - 1];
      if (prev) {
        onChange?.(
          event as unknown as SelectChangeEvent<string | number>,
          prev.value
        );
      }
    }
  };

  return (
    <FormControl
      fullWidth
      variant={variant}
      size="small"
      className={`select-comp w-full max-w-[30.688rem] bg-[var(--dark-grey)] ${className}`}
    >
      <InputLabel id={labelId}>{label}</InputLabel>

      <MuiSelect
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        size="small"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        MenuProps={{
          PaperProps: {
            className: "select-menu-dropdown",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
