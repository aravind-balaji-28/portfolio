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
        className="text-[var(--white-light)] text-[24px] md:text-[32px] lg:text-[40px]"
      >
        {title}
      </Typography>

      {description !== "" &&
        <Typography
          variant="h6"
          className="text-[var(--white-dark-active)] text-[16px] md:text-[18px] lg:text-[20px]"
        >
          {description}
        </Typography>}
    </div>
  );
};

