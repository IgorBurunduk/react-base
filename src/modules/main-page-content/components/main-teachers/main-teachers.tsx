import { useContext, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';

import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';
import { Button } from '@/components/button/button';
import { Container } from '@/components/container';
import { useWindowSize } from '@/hooks/useWindowSize';
import { MainPageContext } from '@/store/main-page';

import { TeacherItem } from './components/teacher-item/teacher-item';
import { createSwiperConfig } from './lib/createSwiperConfig';

import styles from './main-teachers.module.scss';

export const MainTeachers = () => {
  const teachers = useContext(MainPageContext);
  const swiperRef = useRef<SwiperType | null>(null);
  const scrollbarRef = useRef<HTMLDivElement | null>(null);
  const { isMobile } = useWindowSize();

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

  const initSwiper = (swiperInstance: SwiperType) => {
    swiperRef.current = swiperInstance;
  };

  const swiperConfig  = createSwiperConfig({swiperConfig : {
      scrollbar: {
        el: scrollbarRef.current,
        dragClass: styles.scrollbarDrag,
      },
    }, isMobile});

  return (
    <section className={styles.teachers}>
      <Container>
        <h2 className={styles.title}>Профессиональные тренеры</h2>
        <Swiper
          className={styles.slider}
          onBeforeInit={initSwiper}
          spaceBetween={swiperConfig.spaceBetween}
          scrollbar={swiperConfig.scrollbar}
          slidesPerView={swiperConfig.slidesPerView}
          modules={swiperConfig.modules}
        >
          {teachers.teachersList.map((teacherItem) => (
            <SwiperSlide key={teacherItem.id} className={styles.slide}>
              <TeacherItem teacherItem={teacherItem} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.sliderControllers}>
          <div ref={scrollbarRef} className={styles.scrollbar}></div>
          {!isMobile && (
            <div className={styles.buttons}>
              <Button
                variant={'text'}
                additionalClassname={styles.button}
                onClick={createSlideChangeHandler('prev')}
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                variant={'text'}
                additionalClassname={styles.button}
                onClick={createSlideChangeHandler('next')}
              >
                <ArrowRightIcon />
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
