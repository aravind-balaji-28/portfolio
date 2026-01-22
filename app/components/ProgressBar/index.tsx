"use client";
import React from "react";
import clsx from "clsx";
import { mergeClass } from "../../helpers/tailwindMergeClass";
import { Typography } from "../Typography";

interface IProgressBarProps {
  className?: string;
  icon?: string | React.ReactNode | React.ComponentType;
  value: number;
  title: string;
}

const RADIUS = 50;
const STROKE = 10;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const IconRenderer = ({
  icon,
}: {
  icon: string | React.ReactNode | React.ComponentType;
}) => {
  if (typeof icon === "string") {
    return (
      <span className="material-symbols-rounded z-[1] border-[3px] border-[#959595] bg-black rounded-[10px] p-[3px] text-[#959595] text-[1.8rem] [font-variation-settings:'wght'_600,'GRAD'_0,'opsz'_24]">
        {icon}
      </span>
    );
  }

  if (typeof icon === "function") {
    const IconComponent = icon as React.ComponentType<{ className?: string }>;
    return (
      <IconComponent className="z-[1] border-[3px] border-[#959595] bg-black rounded-[10px] p-[3px] text-[#959595] w-[1.8rem] h-[1.8rem]" />
    );
  }

  if (React.isValidElement(icon)) {
    return React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
      className: mergeClass(
        clsx(
          "z-[1] border-[3px] border-[#959595] bg-black rounded-[10px] p-[3px] text-[#959595] !w-[2.3rem] !h-[2.3rem] !text-[2.3rem]"
        )
      ),
    });
  }

  return null;
};

export const ProgressBar: React.FC<IProgressBarProps> = ({
  className = "",
  icon = "javascript",
  value = 75,
  title = "",
}) => {
  const progressOffset =
    CIRCUMFERENCE - (CIRCUMFERENCE * value) / 100;

  return (
    <div className="progress-bar-comp flex flex-col items-center gap-[24px]">
      <div
        className={clsx(
          "relative flex items-center justify-center w-[120px] h-[120px]",
          className
        )}
      >
        {/* SVG Ring */}
        <svg
          width="130"
          height="130"
          viewBox="0 0 120 120"
          className="absolute"
        >
          {/* background ring */}
          <circle
            cx="60"
            cy="60"
            r={RADIUS}
            fill="none"
            stroke="rgba(217,217,217,0.2)"
            strokeWidth={STROKE}
          />

          {/* progress ring */}
          <circle
            cx="60"
            cy="60"
            r={RADIUS}
            fill="none"
            stroke="#FD6F00"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={progressOffset}
            transform="rotate(-90 60 60)"
          />
        </svg>

        {/* inner circle */}
        <div className="absolute w-[95px] h-[95px] rounded-full bg-black" />

        {/* icon */}
        <IconRenderer icon={icon} />
      </div>

      <div className="flex flex-col items-center gap-[8px]">
        <Typography variant="h3" className="text-primary font-bold">
          {value}%
        </Typography>
        <Typography
          variant="h5"
          className="text-[var(--color-dark-hover)] font-bold"
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};
