"use client"
import TextField from "@mui/material/TextField";
import { Typography } from "../Typography";

interface InputProps {
    id?: string;
    label?: string;
    variant: "filled" | "outlined" | "standard";
    className?: string;
    multiline?: boolean;
    rows?: number;
    error?: boolean;
    helperText?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;


}

export const Input: React.FC<InputProps> = ({
    id = "filled-basic",
    label = "UserName",
    variant = "outlined",
    className = "",
    multiline = false,
    rows = 1,
    error = false,
    helperText,
    value,
    onChange,
    onBlur

}) => {
    return (
        <>
            <div className="flex flex-col w-full">
                <TextField
                    id={id}
                    size="small"
                    label={label}
                    variant={variant}
                    fullWidth
                    onChange={onChange}
                    error={error}
                    value={value ?? ""}
                    multiline={multiline}
                    {...(multiline && { rows })}
                    className={`input-comp w-full max-w-[30.688rem] bg-[var(--dark-grey)]  p-4 ${className}`}
                />
                <Typography className="text-[#d32f2f]" variant="body" >
                    {helperText ?? helperText}
                </Typography>
            </div>
        </>
    );
};
