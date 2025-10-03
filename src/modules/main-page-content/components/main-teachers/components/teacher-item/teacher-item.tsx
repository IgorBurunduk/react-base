import { useRef } from 'react';
import { useNavigate } from 'react-router';

import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';
import type { TeacherListType } from '@/types/teacher';

import styles from './teacher-item.module.scss';

interface TeacherItemType {
  teacherItem: TeacherListType;
}

export const TeacherItem = (teacherItem: TeacherItemType) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  const { id, name, imageSrc, description } = teacherItem.teacherItem;
  const teacherImageSrc = teachersImages[imageSrc as keyof typeof teachersImages];

  const handleButtonClick = () => {
    navigate(`/teacher/${id}`);
  };

  return (
    <div className={styles.teacherItem}>
      <img src={teacherImageSrc} alt={name} className={styles.photo} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <Button
        onClick={handleButtonClick}
        variant="text"
        buttonRef={buttonRef}
        additionalClassname={styles.button}
      >
        Подробнее
      </Button>
    </div>
  );
};
