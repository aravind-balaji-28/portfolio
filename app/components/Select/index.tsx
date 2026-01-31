import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);

  const handleChange = (
    event: SelectChangeEvent<string | number>
  ) => {
    onChange?.(event, event.target.value);
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
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        value={value}
        label={label}
        size="small"   
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            className: "select-menu-dropdown",
          },
          MenuListProps: {
            onKeyDown: (event: React.KeyboardEvent) => {
              if (
                event.key !== "ArrowDown" &&
                event.key !== "ArrowUp"
              )
                return;

              event.preventDefault();

              const currentIndex = options.findIndex(
                (opt) => opt.value === value
              );
              if (currentIndex === -1) return;

              const nextIndex =
                event.key === "ArrowDown"
                  ? Math.min(
                    currentIndex + 1,
                    options.length - 1
                  )
                  : Math.max(currentIndex - 1, 0);

              const next = options[nextIndex];
              if (!next || next.value === value) return;

              onChange?.(
                event as unknown as SelectChangeEvent<
                  string | number
                >,
                next.value
              );
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
