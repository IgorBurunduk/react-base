import type { ButtonHTMLAttributes, MutableRefObject } from 'react';

import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  additionalClassname?: string;
  buttonRef?: MutableRefObject<HTMLButtonElement | null>;
}

export const Button = ({
  variant = 'primary',
  additionalClassname,
  children,
  buttonRef,
  ...rest
}: ButtonProps) => {
  const createButtonVariant = () => {
    if (variant === 'primary') {
      return `${styles.button} ${styles.primary}`;
    }

    if (variant === 'secondary') {
      return `${styles.button} ${styles.secondary}`;
    }

    if (variant === 'text') {
      return `${styles.button} ${styles.text}`;
    }

    return `${styles.button}`;
  };

  const createButtonClassname = () => {
    const baseClass = createButtonVariant();
    return additionalClassname ? `${baseClass} ${additionalClassname}` : baseClass;
  };

  return (
    <button ref={buttonRef} className={createButtonClassname()} {...rest}>
      {children}
    </button>
  );
};
