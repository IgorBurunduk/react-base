import { useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Link } from '@/components/link';
import { Tabs } from '@/components/tabs';
import type { TeacherType } from '@/types/teacher';

import styles from './teacher-info.module.scss';
import { TabsContent } from '@/components/tabs-content';

interface TeacherModalProps {
  teacherContent: TeacherType;
}

interface Option {
  value: string;
  label: string;
}

export const TeacherInfo = (teacherContent: TeacherModalProps) => {
  const { id, name, imageSrc, description, links, tabs } = teacherContent.teacherContent;

  const tabsOptions: Option[] = tabs.map((tab) => {
    return { value: tab.name, label: tab.title };
  });

  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [activeTabContent, setActiveTabContent] = useState(tabs[0].data);

  const onTabClickHandler = (value: string) => {
    setActiveTab(value);
    setActiveTabContent(getActiveTab(value));
  };

  const teacherImageSrc = teachersImages[imageSrc as keyof typeof teachersImages];
  const getActiveTab = (value: string) => {
    const activeTab = tabs.filter((tab) => {
      return tab.name === value;
    });
    return activeTab[0].data;
  };

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
      <div className={styles.teacherTabs}>
        <Tabs
          tabs={tabsOptions}
          activeTab={activeTab}
          onTabClick={onTabClickHandler}
          ariaLabel="Навигация по преподавателю"
        />

        <div className={styles.tabsContent}>
          {activeTabContent.map((tab, index) => (
            <TabsContent key={index} title={tab.title} text={tab.text} />
          ))}
        </div>
      </div>
    </div>
  );
};
