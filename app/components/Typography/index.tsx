"use client";

import React from "react";
import clsx from "clsx";
import { typographyCva } from "./typography.cva";
import { mergeClass } from "../../helpers/tailwindMergeClass";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";

interface ITypographyProps {
  variant?: Variant;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

const tagMap: Record<Variant, keyof React.JSX.IntrinsicElements> = {
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
}) => {
  const Tag = as ?? tagMap[variant];

  return (
    <Tag
      className={mergeClass(
        typographyCva({ variant }),
        className
      )}
    >
      {children}
    </Tag>
  );
}  
