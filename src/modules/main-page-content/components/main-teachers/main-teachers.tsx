import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Container } from '@/components/container';
import { MainPageContext } from '@/store/main-page';

import { TeacherItem } from './components/teacher-item/teacher-item';

import styles from './main-teachers.module.scss';

export const MainTeachers = () => {
  const teachers = useContext(MainPageContext);

  return (
    <section className={styles.teachers}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Профессиональные тренеры</h2>
          <div className={styles.content}>
            <Swiper spaceBetween={40} slidesPerView={'auto'} className={styles.slider}>
              {teachers.teachersList.map((teacherItem) => (
                <SwiperSlide key={teacherItem.id} className={styles.slide}>
                  <TeacherItem {...teacherItem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};
