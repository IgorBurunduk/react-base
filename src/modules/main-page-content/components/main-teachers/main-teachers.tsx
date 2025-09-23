import { useContext, useRef } from 'react';
import { Swiper, type SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';
import { Container } from '@/components/container';
import { useWindowSize } from '@/hooks/useWindowSize';
import { MainPageContext } from '@/store/main-page';

import { TeacherItem } from './components/teacher-item/teacher-item';

import styles from './main-teachers.module.scss';
import { Button } from '@/components/button/button';

export const MainTeachers = () => {
  const teachers = useContext(MainPageContext);
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollbarRef = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const initSwiper = (swiperInstance: SwiperClass) => {
    swiperRef.current = swiperInstance;
  };

  const createSlideChangeHandler = (direction: 'next' | 'prev') => () => {
    if (!swiperRef.current) {
      return;
    }
    if (direction === 'next') {
      swiperRef.current.slideNext();
      return;
    }

    swiperRef.current.slidePrev();
  };

  return (
    <section className={styles.teachers}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Профессиональные тренеры</h2>
          <Swiper
            spaceBetween={40}
            slidesPerView={'auto'}
            className={styles.slider}
            onBeforeInit={initSwiper}
          >
            {teachers.teachersList.map((teacherItem) => (
              <SwiperSlide key={teacherItem.id} className={styles.slide}>
                <TeacherItem {...teacherItem} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.sliderControllers}>
            <div className={styles.sliderScrollbar}></div>
            {!isMobile && (
              <div className={styles.sliderButtons}>
                <Button variant={'text'} onClick={createSlideChangeHandler('prev')}>
                  <ArrowLeftIcon />
                </Button>
                <Button variant={'text'} onClick={createSlideChangeHandler('next')}>
                  <ArrowRightIcon />
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
