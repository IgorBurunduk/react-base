import { useEffect, useState } from 'react';

import { getTeacherById } from '@/api/mock-api';
import type { TeacherType } from '@/types/teacher';

import { TeacherInfo } from './components/teacher-info';

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
        setError(false);
        setTeacherContent(resolve);
      },
      (reject:string) => {
        setIsLoading(false);
        setError(true);
        console.log(reject);
      },
    );
  }, [teacherId, teacherContent]);

  return (
    <div className={styles.teacherModalContent}>
      {isLoading && <div className={styles.loading}>Загружаю...</div>}
      {error && <div className={styles.error}>Такого преподавателя не найдено</div>}
      {teacherContent && <TeacherInfo teacherContent={teacherContent} />}
    </div>
  );
};
