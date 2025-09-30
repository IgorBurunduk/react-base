import { Fragment } from 'react';

import styles from './tab-content.module.scss';

interface TabsContentProps {
  title?: string;
  text: string[];
}

export const TabContent = ({ title, text }: TabsContentProps) => {
  return (
    <div className={styles.tabContent}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <p className={styles.text}>
        {text.map((textItem, index) => {
          return (
            <Fragment key={index}>
              {textItem}
              {index < text.length - 1 && <br />}
            </Fragment>
          );
        })}
      </p>
    </div>
  );
};
