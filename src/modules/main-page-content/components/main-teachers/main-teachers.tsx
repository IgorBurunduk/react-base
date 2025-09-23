import { useContext, useEffect, useRef } from 'react';
import { Swiper, type SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';
import { Button } from '@/components/button/button';
import { Container } from '@/components/container';
import { useWindowSize } from '@/hooks/useWindowSize';
import { MainPageContext } from '@/store/main-page';

import { TeacherItem } from './components/teacher-item/teacher-item';

import styles from './main-teachers.module.scss';
import { Navigation, Scrollbar } from 'swiper/modules';

export const MainTeachers = () => {
  const teachers = useContext(MainPageContext);
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollbarRef = useRef<HTMLDivElement | null>(null);
  const initSwiper = (swiperInstance: SwiperClass) => {
    swiperRef.current = swiperInstance;
  };
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  useEffect(() => {
    if (swiperRef.current && scrollbarRef.current) {
      swiperRef.current.update();
    }
  }, [teachers]);

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
            onBeforeInit={initSwiper}
            modules={[Scrollbar]}
            spaceBetween={40}
            slidesPerView={'auto'}
            className={styles.slider}
            scrollbar={{
              draggable: true,
              el: scrollbarRef.current,
              dragClass: styles.sliderScrollbarDrag,
            }}
          >
            {teachers.teachersList.map((teacherItem) => (
              <SwiperSlide key={teacherItem.id} className={styles.slide}>
                <TeacherItem {...teacherItem} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.sliderControllers}>
            <div ref={scrollbarRef} className={styles.sliderScrollbar}></div>
            {!isMobile && (
              <div className={styles.sliderButtons}>
                <Button variant={'text'} onClick={createSlideChangeHandler('prev')} additionalClassname={styles.sliderButton}>
                  <ArrowLeftIcon />
                </Button>
                <Button variant={'text'} onClick={createSlideChangeHandler('next')} additionalClassname={styles.sliderButton}>
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
