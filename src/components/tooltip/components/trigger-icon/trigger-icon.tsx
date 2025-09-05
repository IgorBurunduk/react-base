import type { ReactNode } from 'react';

import styles from './trigger-icon.module.scss';

export interface TriggerIconProps {
  iconContent?: ReactNode;
}

export const TriggerIcon = ({ iconContent }: TriggerIconProps) => {
  const isNotEmptyString = typeof iconContent === 'string' && iconContent?.trim().length > 0;
  return iconContent && isNotEmptyString ? (
    <span className={`${styles.triggerIcon}`}>{iconContent}</span>
  ) : (
    <span className={`${styles.triggerIcon} ${styles.triggerIconDefault}`}>{'i'}</span>
  );
};
