import React from "react";
import { Typography } from "../Typography";

interface ISectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeading: React.FC<ISectionHeadingProps> = ({
  title = "",
  description = "",
  className = "",
}) => {
  return (
    <div className={`${className} flex flex-col items-center text-center`}>
      <Typography
        variant="h2"
        className="text-[2.5rem] text-[var(--white-light)]"
      >
        {title}
      </Typography>

      {description !== "" &&
        <Typography
          variant="h6"
          className="text-[var(--white-dark-active)]"
        >
          {description}
        </Typography>}
    </div>
  );
};

