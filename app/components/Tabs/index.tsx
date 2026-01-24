import { clsx } from "clsx";

import React, { useEffect, useState } from "react";
import { Button } from "../Button";

interface TabItem {
    id: number;
    label: string;
}

interface ITabsProps {
    tabs: TabItem[];
    initialActiveTab?: number;
    className?: string;
}

export const Tabs: React.FC<ITabsProps> = ({
    tabs,
    initialActiveTab = 1,
    className = "",
}) => {
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    useEffect(() => {
        setActiveTab(initialActiveTab);
    }, [initialActiveTab]);

    return (
        <div className={clsx("tabs-comp flex gap-[10px]", className)}>
            {tabs.map((tab) => (
                <Button
                    key={tab.id}
                    borderRadius="corner"
                    color={activeTab === tab.id ? "primary" : "dark"}
                    iconPosition="left"
                    onClick={() => setActiveTab(tab.id)}
                    size="md"
                    text={tab.label}
                    type="button"
                    className={`pt-[12px] pl-[40px] pb-[12px] pr-[40px] ${activeTab === tab.id ? 'is-active' : ''}`}
                    variant='filled'
                />
            ))}
        </div>
    );
};
