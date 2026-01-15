"use client";

import { clsx } from "clsx";
import React from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";

interface ITypographyProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
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

const typographyClasses: Record<Variant, string> = {
  h1: "font-lato text-[4.375rem] font-bold leading-[1.12] text-black",
  h2: "font-lato text-4xl font-bold leading-[1.12] text-black",
  h3: "font-lato text-[1.875rem] font-semibold leading-[1.12] text-black",
  h4: "font-lato text-[1.75rem] font-semibold leading-[1.12] text-black",
  h5: "font-lato text-2xl font-semibold leading-[1.12] text-black",
  h6: "font-lato text-xl font-medium leading-[1.12] text-black",
  body: "font-lato text-base font-normal leading-[1.12] text-black",
};

export const Typography: React.FC<ITypographyProps> = ({
  variant,
  children,
  className,
}) => {
  const Tag = tagMap[variant];

  return (
    <Tag className={clsx(typographyClasses[variant], className)}>
      {children}
    </Tag>
  );
};
