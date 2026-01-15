import React from "react";
import { Typography } from "../Typography";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  variant: "filled" | "outlined";
  size: "md" | "lg";
  icon?: string | React.ReactNode | React.ComponentType;
  text?: string;
  color?: "dark" | "primary";
  iconPosition?: string;
  type?: "button" | "submit" | "reset";
  isIconOnly?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  className = "",
  variant = "filled",
  size = "md",
  icon = "",
  text = "",
  color = "primary",
  iconPosition = "",
  type = "button",
  isIconOnly = false,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("Button clicked");
    onClick?.();
  };

  const IconRenderer = ({
    icon,
  }: {
    icon: string | React.ReactNode | React.ComponentType;
  }) => {
    if (typeof icon === "string") {
      return <span className="material-symbols-rounded">{icon}</span>;
    }

    if (typeof icon === "function") {
      const IconComponent = icon;
      return <IconComponent />;
    }

    if (React.isValidElement(icon)) {
      return icon;
    }

    return null;
  };

  const renderIcon = (pos: "left" | "right") => {
    return iconPosition === pos && icon && <IconRenderer icon={icon} />;
  };

  const content = (
    <>
      {isIconOnly ? (
        <>
          <IconRenderer icon={icon} />
        </>
      ) : (
        <>
          {renderIcon("left")}
          {text && (
            <Typography variant="h6" className="ws-d-p-b-text">
              {text}
            </Typography>
          )}
          {renderIcon("right")}
        </>
      )}
    </>
  );

  const baseClass = "";
  const sizesClass = {
    md: "",
    lg: "",
  };
  const variantClass = {
    filled: "",
    outlined: "",
  };
  const colorClass = {
    primary: "",
    dark: "",
  };

  return (
    <>
      <button
        type={type}
        className={clsx(
          variantClass[variant],
          colorClass[color],
          sizesClass[size],
          className
        )}
        // onClick={handleClick}
        disabled={disabled}
      >
        {content}
      </button>
    </>
  );
};
