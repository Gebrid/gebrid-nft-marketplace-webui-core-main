import { useState } from 'react';

export interface Tab {
  id: number;
  title: string;
}

export const useProfileTabs = () => {
  const tabs = [
    {
      id: 0,
      title: 'On sale',
    },
    {
      id: 1,
      title: 'Owned',
    },
    {
      id: 2,
      title: 'Closed deal',
    },
    {
      id: 3,
      title: 'Collection',
    },
  ];

  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const handleSetActiveTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  return { activeTab, handleSetActiveTab, tabs };
};
