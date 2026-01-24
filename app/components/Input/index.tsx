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
    variant = "filled",
    className = "",
}) => {
    return (
        <div className={`input-comp ${className}`}>
            <TextField
                id={id}
                size="small"
                label={label}
                variant={variant}
                fullWidth
                className="p-4"
            />
        </div>
    );
};
