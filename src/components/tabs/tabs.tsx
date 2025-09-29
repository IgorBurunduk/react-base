import { Button } from '@/components/button';

import styles from './tabs.module.scss';

interface TabOption {
  value: string;
  label: string;
}

interface TabsProps {
  tabs: TabOption[];
  activeTab: string;
  onTabClick: (value: string) => void;
  additionalClassname?: string;
  ariaLabel?: string;
}

export const Tabs = ({ tabs, activeTab, onTabClick, additionalClassname, ariaLabel }: TabsProps) => {
  const getTabClassName = (value: string) => {
    const baseClass = styles.tab;
    const activeClass = value === activeTab ? styles.active : '';
    return [baseClass, activeClass, additionalClassname].filter(Boolean).join(' ');
  };

  const handleTabClick = (value: string) => {
    onTabClick(value);
  };

  return (
    <div className={styles.tabs} role="tablist" aria-label={ariaLabel}>
      {tabs.map(({ value, label }) => (
        <Button
          key={value}
          className={getTabClassName(value)}
          onClick={() => handleTabClick(value)}
          role="tab"
          aria-selected={value === activeTab}
          aria-controls={`tabpanel-${value}`}
          id={`tab-${value}`}
          tabIndex={value === activeTab ? 0 : -1}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
