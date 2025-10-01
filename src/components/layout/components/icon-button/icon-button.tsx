import type { ReactNode } from 'react';

import { Button } from '@/components/button';
import { Link } from '@/components/link';

import styles from './icon-button.module.scss';

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  href?: string;
  additionalClassname?: string;
}

export const IconButton = ({ icon, onClick, href, additionalClassname }: IconButtonProps) => {
  const createClassname = () => {
    const baseClassname = `${styles.iconButton}`;

    if (additionalClassname) {
      return `${baseClassname} ${additionalClassname}`;
    }

    return baseClassname;
  };

  if (href) {
    return (
      <Link href={href} additionalClassname={createClassname()}>
        {icon}
      </Link>
    );
  }

  return (
    <Button variant="text" type="button" onClick={onClick} additionalClassname={createClassname()}>
      {icon}
    </Button>
  );
};
