import TextField from "@mui/material/TextField";

interface InputProps {
    id?: string;
    label?: string;
    variant: "filled" | "outlined" | "standard";
    className?: string;
    multiline?: boolean;
    rows?: number;

}

export const Input: React.FC<InputProps> = ({
    id = "filled-basic",
    label = "UserName",
    variant = "outlined",
    className = "",
    multiline = false,
    rows = 1,
}) => {
    return (
        <TextField
            id={id}
            size="small"
            label={label}
            variant={variant}
            fullWidth
            multiline={multiline}
            {...(multiline && { rows })}
            className={`input-comp w-full max-w-[30.688rem] bg-[var(--dark-grey)]  p-4 ${className}`}
        />
    );
};
