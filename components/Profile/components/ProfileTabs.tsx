import { Tab } from 'hooks/useProfileTabs';
import styles from '../styles/ProfileWrapper.module.scss';

interface ProfileTabsProps {
  setActiveTab: (tab: Tab) => void;
  activeTab: Tab;
  tabs: Tab[];
}

export const ProfileTabs = ({
  setActiveTab,
  activeTab,
  tabs,
}: ProfileTabsProps) => {
  const active = styles.active;

  return (
    <div className={styles.profileTabs}>
      {tabs.map((tab) => (
        <span
          key={tab.id}
          onClick={() => setActiveTab(tab)}
          className={`${styles.profileTab} ${
            activeTab.id === tab.id ? active : ''
          }`}
        >
          {tab.title}
        </span>
      ))}
    </div>
  );
};
