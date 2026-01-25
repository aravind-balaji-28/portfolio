import React from "react";
import { Typography } from "../Typography";

interface ISectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeading: React.FC<ISectionHeadingProps> = ({
  title = "Services",
  description = "Building secure, scalable, and high-performance web applications with modern technologies.",
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

export default SectionHeading;
