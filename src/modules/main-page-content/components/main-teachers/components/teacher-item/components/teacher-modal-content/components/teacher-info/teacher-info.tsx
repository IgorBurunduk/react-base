import { useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Link } from '@/components/link';
import { Select } from '@/components/select';
import { Tabs } from '@/components/tabs';
import { TabContent } from '@/components/tabs-content';
import { useWindowSize } from '@/hooks/useWindowSize';
import type { TeacherType } from '@/types/teacher';

import styles from './teacher-info.module.scss';

interface TeacherModalProps {
  teacherContent: TeacherType;
}

interface Option {
  value: string;
  label: string;
}

export const TeacherInfo = (teacherContent: TeacherModalProps) => {
  const { name, imageSrc, description, links, tabs } = teacherContent.teacherContent;

  const tabsOptions: Option[] = tabs.map((tab) => {
    return { value: tab.name, label: tab.title };
  });

  const [activeTab, setActiveTab] = useState(tabsOptions[0]);
  const [activeTabContent, setActiveTabContent] = useState(tabs[0].data);

  const { isMobile } = useWindowSize();

  const onTabClickHandler = (value: Option) => {
    setActiveTab(value);
    setActiveTabContent(getActiveTab(value));
  };

  const getActiveTab = (value: Option) => {
    const activeTab = tabs.filter((tab) => {
      return tab.name === value.value;
    });
    return activeTab[0].data;
  };

  const teacherImageSrc = teachersImages[imageSrc as keyof typeof teachersImages];

  return (
    <div className={styles.teacherInfo}>
      <div className={styles.introduction}>
        <img className={styles.photo} src={teacherImageSrc} alt={name} />
        <h2 id="modal-title" className={styles.name}>
          {name}
        </h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.links}>
          {links.map((link, index) => (
            <Link href={link.href} key={index} additionalClassname={styles.link}>
              <img src={link.imagePath} alt="" />
            </Link>
          ))}
        </div>
      </div>
      {isMobile ? (
        <Select options={tabsOptions} value={activeTab} onChange={onTabClickHandler} />
      ) : (
        <Tabs
          tabs={tabsOptions}
          activeTab={activeTab}
          onTabClick={onTabClickHandler}
          ariaLabel="Навигация по преподавателю"
        />
      )}
      <div className={styles.tabsContent}>
        {activeTabContent.map((tab, index) => (
          <TabContent key={index} title={tab.title} text={tab.text} />
        ))}
        <div className={styles.tabsContentEnd}></div>
      </div>
    </div>
  );
};
