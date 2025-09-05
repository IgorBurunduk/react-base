import { Tooltip } from '@/components/tooltip/tooltip';
import type { BenefitItemType } from '@/types/benefits';

import styles from './benefit-item.module.scss';

interface BenefitItemProps {
  benefitProps: BenefitItemType;
}

export const BenefitItem = ({
  benefitProps: { subtitle, description, tooltip },
}: BenefitItemProps) => {
  return (
    <div className={styles.benefitItem}>
      <div className={styles.benefitHeader}>
        <h3 className={styles.benefitTitle}>{subtitle}</h3>
        {tooltip && tooltip?.trim().length > 0 ? (
          <Tooltip text={tooltip} additionalClassName={styles.benefitTooltip} />
        ) : null}
      </div>
      <p className={styles.benefitDescription}>{description}</p>
    </div>
  );
};
