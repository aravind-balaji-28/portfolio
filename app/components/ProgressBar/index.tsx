"use client";
import React from "react";
import clsx from "clsx";
import { mergeClass } from "../../helpers/tailwindMergeClass";
import JavascriptIcon from '@mui/icons-material/Javascript';
interface IProgressBarProps {
    className?: string;
    icon?: string | React.ReactNode | React.ComponentType;
    value: number
}

const IconRenderer = ({
    icon,
}: {
    icon: string | React.ReactNode | React.ComponentType;
}) => {
    if (typeof icon === "string") {
        return <span
            className={`material-symbols-rounded z-[1] border-[3px] border-[#959595] bg-black rounded-[10px] p-[3px] text-[#959595] text-[1.8rem] [font-variation-settings:'wght'_600,'GRAD'_0,'opsz'_24]`}
        >
            {icon}
        </span>
    }
    if (typeof icon === "function") {
        const IconComponent = icon as React.ComponentType<{ className?: string }>;
        return (
            <IconComponent
                className="z-[1] border-[3px] border-[#959595] bg-black rounded-[10px] p-[3px] text-[#959595] w-[1.8rem] h-[1.8rem]"
            />
        );
    }
    if (React.isValidElement(icon)) {
        return React.cloneElement(
            icon as React.ReactElement<{ className?: string }>,
            {
                className: mergeClass(
                    clsx(
                        "z-[1] border-[3px] border-[#959595] bg-black rounded-[10px] p-[3px] text-[#959595] !w-[2.3rem] !h-[2.3rem] !text-[2.3rem]"
                    )
                ),
            }
        );
    }
    return null;
};

export const ProgressBar: React.FC<IProgressBarProps> = ({
    className = '',
    icon = 'javascript',
    value = 75
}) => {
    return (
        <div
            className={`relative flex items-center justify-center w-30 h-30 rounded-full progress-ring ${className}`}
            style={{ "--progress": value } as React.CSSProperties}
        >
            <div className="absolute w-[95px] h-[95px] rounded-full bg-black" />
            <IconRenderer icon={icon} />
        </div>
        // {value}%
    );
}