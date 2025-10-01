import { useRef, useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import type { TeacherListType } from '@/types/teacher';

import { TeacherModalContent } from './components/teacher-modal-content';

import styles from './teacher-item.module.scss';

interface TeacherItemType {
  teacherItem: TeacherListType;
}

export const TeacherItem = (teacherItem: TeacherItemType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { id, name, imageSrc, description } = teacherItem.teacherItem;
  const teacherImageSrc = teachersImages[imageSrc as keyof typeof teachersImages];

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    buttonRef.current?.focus();
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
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <TeacherModalContent teacherId={id} />
      </Modal>
    </div>
  );
};
