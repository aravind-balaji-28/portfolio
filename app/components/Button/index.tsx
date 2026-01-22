"use client"
import React from "react";
import { Typography } from "../Typography";
import clsx from "clsx";
import { mergeClass } from "../../helpers/tailwindMergeClass";

interface IButtonProps {
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
  borderRadius: "rounded" | "corner";
}

export const Button: React.FC<IButtonProps> = ({
  className = "",
  variant = "filled",
  size = "md",
  icon = "",
  text = "",
  color = "primary",
  borderRadius = "corner",
  iconPosition = "",
  type = "button",
  isIconOnly = false,
  onClick,
  disabled = false,
}
) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    alert("Button clicked");
    onClick?.();
  };

  const IconRenderer = ({
    icon,
  }: {
    icon: string | React.ReactNode | React.ComponentType;
  }) => {
    const iconSizeClass = {
      md: "!text-[20px]",
      lg: "!text-[24px]",
    };

    if (typeof icon === "string") {
      return <span
        className={mergeClass(` ${iconSizeClass[size]} material-symbols-rounded`)}
      >
        {icon}
      </span>
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
            <Typography variant={size === "md" ? "body" : "h6"} className="font-bold text-inherit">
              {text}
            </Typography>
          )}
          {renderIcon("right")}
        </>
      )}
    </>
  );


  const baseClass =
    "button-comp relative inline-flex items-center justify-center gap-2.5 cursor-pointer transition disabled:cursor-not-allowed disabled:pointer-events-none";

  const sizesClass = {
    md: "px-[30px] py-3",
    lg: "px-[40px] py-3",
  };
  const variantClass = {
    filled: {
      primary:
        "text-white bg-primary disabled:opacity-50 disabled:saturate-50",

      dark:
        "text-white bg-black disabled:opacity-50 disabled:saturate-50",

      white:
        "text-black bg-[var(--color-dark-hover) disabled:opacity-50 disabled:saturate-50",
    },

    outlined: {
      primary:
        "text-primary border border-primary hover:bg-primary hover:text-white disabled:opacity-50 disabled:hover:bg-transparent",

      dark:
        "text-black border border-black hover:bg-black hover:text-white disabled:opacity-50 disabled:hover:bg-transparent",
      white: "text-[var(--color-dark-hover)] border border-[var(--color-white)] bg-transparent hover:bg-[var(--color-dark-hover)] hover:text-black disabled:opacity-50 disabled:hover:bg-transparent"

    },

    transparent: {
      primary:
        "text-primary disabled:opacity-50",

      dark:
        "text-black disabled:opacity-50",

      white:
        "text-white disabled:opacity-50",
    },
  };



  const borderRadiusClass = {
    corner: "rounded-[8px]",
    rounded: "rounded-full",
  };
  const iconOnlySizeClass = {
    md: "p-[8px]",
    lg: "p-[10px]",
  };

  return (
    <>
      <button
        type={type}
        className={mergeClass(clsx(
          baseClass,
          isIconOnly ? iconOnlySizeClass[size] : sizesClass[size],
          borderRadiusClass[borderRadius],
          variantClass[variant][color],
          className
        ))}
        onClick={(e) => {
          handleClick(e)
        }}
        disabled={disabled}
      >
        {content}
      </button>
    </>
  );
};
