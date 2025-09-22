import { useContext } from 'react';

import { Container } from '@/components/container';
import { MainPageContext } from '@/store/main-page';

import {TeacherItem} from './components/teacher-item';

import styles from './main-teachers.module.scss';

export const MainTeachers = () => {
  const teachers = useContext(MainPageContext);

  return (
    <section className={styles.teachers}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Профессиональные тренеры</h2>
          <div className={styles.teachersList}>
            {teachers.teachersList.map((teacherItem) => (
              <TeacherItem key={teacherItem.id} {...teacherItem} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
