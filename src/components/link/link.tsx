import type { AnchorHTMLAttributes } from 'react';

import styles from './link.module.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  additionalClassname?: string;
}

export const Link = ({ children, additionalClassname, ...rest }: LinkProps) => {
  const createLinkClassname = () => {
    const baseClassname = `${styles.link}`;

    if (additionalClassname) {
      return `${baseClassname} ${additionalClassname}`;
    }

    return baseClassname;
  };

  return (
    <a className={createLinkClassname()} {...rest}>
      {children}
    </a>
  );
};
