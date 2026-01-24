  "use client";

  import React from "react";
  import clsx from "clsx";
  import { typographyCva } from "./typography.cva";
  import { mergeClass } from "../../helpers/tailwindMergeClass";

  type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";

interface ITypographyProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: keyof HTMLElementTagNameMap;
}


const tagMap: Record<Variant, keyof HTMLElementTagNameMap> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
};

  export const Typography: React.FC<ITypographyProps> = ({
    variant = "body",
    as,
    className,
    children,
    ...rest
  }) => {
    const Tag = as ?? tagMap[variant];

    return (
      <Tag
        {...rest}
        className={mergeClass(
          typographyCva({ variant }),
          className
        )}
      >
        {children}
      </Tag>
    );
  }  
