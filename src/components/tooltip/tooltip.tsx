import { useState } from 'react';

import type { TooltipProps } from '@/types/tooltip';

import { TriggerIcon } from './components/trigger-icon/trigger-icon';

import styles from './tooltip.module.scss';

export const Tooltip = ({ text, icon, additionalClassName }: TooltipProps) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const createTooltipClassName = () => {
    const baseClass = `${styles.tooltip}`;
    return additionalClassName ? `${baseClass} ${additionalClassName}` : baseClass;
  };

  const handleMouseEnter = () => {
    setIsTextVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTextVisible(false);
  };

  return (
    <div
      className={createTooltipClassName()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles.trigger}>{<TriggerIcon iconContent={icon} />}</span>
      {isTextVisible && <p className={`${styles.text} ${styles.textVisible}`}>{text}</p>}
    </div>
  );
};
