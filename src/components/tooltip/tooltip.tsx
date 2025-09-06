import { type ReactNode, useState } from 'react';

import { TooltipIcon } from '@/assets/icons';

import styles from './tooltip.module.scss';

interface TooltipProps {
  text: string;
  icon?: ReactNode;
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

  return (
    <span
      className={createTooltipClassName()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`${styles.triggerIcon}`}>{icon ? icon : <TooltipIcon />}</span>
      {isTextVisible && <span className={`${styles.text}`}>{text}</span>}
    </span>
  );
};
