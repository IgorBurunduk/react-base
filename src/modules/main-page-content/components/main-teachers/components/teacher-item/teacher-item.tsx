import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button/button';
import type { TeacherListType } from '@/types/teacher';

import styles from './teacher-item.module.scss';

interface TeacherItemType {
  teacherItem: Pick<TeacherListType, 'name' | 'imageSrc' | 'description'>;
}

export const TeacherItem = (teacherItem: TeacherItemType) => {
  const { name, imageSrc, description } = teacherItem.teacherItem;
  const teacherImageSrc = teachersImages[imageSrc as keyof typeof teachersImages];

  return (
    <div className={styles.teacherItem}>
      <img src={teacherImageSrc} alt={name} className={styles.photo} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <Button variant="text" additionalClassname={styles.button}>
        Подробнее
      </Button>
    </div>
  );
};
