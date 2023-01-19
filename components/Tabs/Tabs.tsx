import React from 'react';

import './Tabs.scss';

type Tab = {name: string, id: number};

interface IProps {
    tabs: Tab[];
    tabsContent: {
        [id: number]: React.ReactNode;
    }
    className?: string;
}

const Tabs = ({tabs, tabsContent, className}: IProps): JSX.Element => {
    const [activeTab, setActiveTab] = React.useState(tabs[0].id);
    const renderTabsTitle = (tab: Tab, index: number) => {
        return (
            <li onClick={() => setActiveTab(tab.id)} key={index} className={`tab-title ${tab.id === activeTab ? 'active' : ''}`}>{tab.name}</li>
        );
    }

    return (
        <div className={`tabs ${className}`}>
            <div className="d-flex justify-content-center">
                <ul className="tabs-header">
                    {tabs.map((tab, index) => renderTabsTitle(tab, index))}
                </ul>
            </div>
            <div className="tabs-content h-100">
                {tabsContent[activeTab]}
            </div>
        </div>
    );
};

export default Tabs;
