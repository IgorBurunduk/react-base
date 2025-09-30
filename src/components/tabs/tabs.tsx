import { Button } from '@/components/button';

import styles from './tabs.module.scss';

interface TabOption {
  value: string;
  label: string;
}

interface TabsProps {
  tabs: TabOption[];
  activeTab: TabOption;
  onTabClick: (value: TabOption) => void;
  additionalClassname?: string;
  ariaLabel?: string;
}

export const Tabs = ({
  tabs,
  activeTab,
  onTabClick,
  additionalClassname,
  ariaLabel,
}: TabsProps) => {
  const getTabClassName = (value: string) => {
    const baseClass = styles.tab;
    const activeClass = value === activeTab.value ? styles.active : '';
    return [baseClass, activeClass, additionalClassname].filter(Boolean).join(' ');
  };

  const handleTabClick = (value: TabOption) => {
    onTabClick(value);
  };

  return (
    <div className={styles.tabs} role="tablist" aria-label={ariaLabel}>
      {tabs.map(({ value, label }, index) => (
        <Button
          key={value}
          className={getTabClassName(value)}
          onClick={() => handleTabClick(tabs[index])}
          role="tab"
          type="button"
          aria-selected={value === activeTab.value}
          aria-controls={`tabpanel-${value}`}
          id={`tab-${value}`}
          tabIndex={value === activeTab.value ? 0 : -1}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
