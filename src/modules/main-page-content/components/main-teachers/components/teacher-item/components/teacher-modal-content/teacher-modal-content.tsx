import { useEffect, useState } from 'react';

import { getTeacherById } from '@/api/mock-api';
import { TeacherModal } from '@/modules/main-page-content/components/main-teachers/components/teacher-item/components/teacher-modal-content/components';
import type { TeacherType } from '@/types/teacher';

import styles from './teacher-modal-content.module.scss';

interface TeacherModalProps {
  teacherId: number;
}

export const TeacherModalContent = ({ teacherId }: TeacherModalProps) => {
  const [teacherContent, setTeacherContent] = useState<TeacherType>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTeacherContent = getTeacherById(teacherId);
    getTeacherContent.then(
      (resolve) => {
        setIsLoading(false);
        setTeacherContent(resolve);
      },
      (reject) => {
        setIsLoading(false);
        setError(true);
        console.log(reject);
      },
    );
  }, [teacherId, teacherContent]);

  return (
    <div className={styles.teacherModalContent}>
      {isLoading && <div className={styles.loading}>Загружаю...</div>}
      {teacherContent && <TeacherModal teacherContent={teacherContent} />}
      {error && <div className={styles.error}>Что-то пошло не так...</div>}
    </div>
  );
};
