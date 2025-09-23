import { teachersImages } from '@/assets/images';
import { Link } from '@/components/link';
import type { TeacherListType } from '@/types/teacher';

import styles from './teacher-item.module.scss';

export const TeacherItem = ({ id, name, imageSrc, description }: TeacherListType) => {
  const teacherImageSrc = teachersImages[imageSrc as keyof typeof teachersImages];

  return (
    <div className={styles.teacherItem}>
      <img src={teacherImageSrc} alt={name} className={styles.teacherItemPhoto} />
      <h3 className={styles.teacherItemName}>{name}</h3>
      <p className={styles.teacherItemDescription}>{description}</p>
      <Link
        href={`/teacher/${id}`}
        additionalClassname={styles.teacherItemLink}
      >{`Подробнее`}</Link>
    </div>
  );
};
