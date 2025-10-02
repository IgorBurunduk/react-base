import { Link } from '@/components/link';

import styles from './phone-call-button.module.scss';

export const PhoneCallButton = () => {
  return (
    <Link href="tel:88000001122" additionalClassname={styles.phoneCall}>
      +7 800 000 11 22
    </Link>
  );
};
