import { useState } from 'react';

import { TooltipIcon } from '@/assets/icons';

import styles from './tooltip.module.scss';

interface TooltipProps {
  text: string;
  icon?: string;
  additionalClassName?: string;
}

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

  const createTriggerIcon = () => {
    const isNotEmptyIcon = icon && icon?.trim().length > 0;
    return (
      <span className={`${styles.triggerIcon}`}>
        {icon && isNotEmptyIcon ? icon : <TooltipIcon />}
      </span>
    );
  };

  return (
    <span
      className={createTooltipClassName()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {createTriggerIcon()}
      {isTextVisible && (
        <span className={`${styles.textWrapper}`}>
          <span className={`${styles.text}`}>{text}</span>
        </span>
      )}
    </span>
  );
};
