import type { PropsWithChildren } from 'react';

import { PhoneIcon } from '@/assets/icons';
import { Link } from '@/components/link';
import { useWindowSize } from '@/hooks/useWindowSize';

import styles from './phone-call-button.module.scss';

interface PhoneCallButtonProps extends PropsWithChildren {
  additionalClassname?: string;
}

export const PhoneCallButton = ({ additionalClassname }: PhoneCallButtonProps) => {
  const { isTablet } = useWindowSize();

  return isTablet ? (
    <Link href="tel:88000001122" additionalClassname={additionalClassname}>
      <PhoneIcon />
    </Link>
  ) : (
    <Link href="tel:88000001122" additionalClassname={styles.phoneCall}>
      +7 800 000 11 22
    </Link>
  );
};
