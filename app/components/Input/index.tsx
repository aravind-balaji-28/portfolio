import TextField from "@mui/material/TextField";

interface InputProps {
    id?: string;
    label?: string;
    variant: "filled" | "outlined" | "standard";
    className?: string;
}

export const Input: React.FC<InputProps> = ({
    id = "filled-basic",
    label = "UserName",
    variant = "outlined",
    className = "",
}) => {
    return (
        <TextField
            id={id}
            size="small"
            label={label}
            variant={variant}
            fullWidth
            className={`input-comp w-full max-w-[30.688rem] p-4 ${className}`}
        />
    );
};
