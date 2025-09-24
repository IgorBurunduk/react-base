import { useContext, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';
import { Button } from '@/components/button/button';
import { Container } from '@/components/container';
import { useWindowSize } from '@/hooks/useWindowSize';
import { MainPageContext } from '@/store/main-page';

import { TeacherItem } from './components/teacher-item/teacher-item';
import { createSwiperConfig } from './lib/swiperConfig';

import styles from './main-teachers.module.scss';

export const MainTeachers = () => {
  const teachers = useContext(MainPageContext);
  const scrollbarRef = useRef<HTMLDivElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const { isMobile } = useWindowSize();

  return (
    <section className={styles.teachers}>
      <Container>
        <h2 className={styles.title}>Профессиональные тренеры</h2>
        <Swiper
          className={styles.slider}
          {...createSwiperConfig(
            scrollbarRef.current,
            styles.scrollbarDrag,
            buttonPrevRef.current,
            buttonNextRef.current,
          )}
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
                buttonRef={buttonPrevRef}
                additionalClassname={styles.button}
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                variant={'text'}
                buttonRef={buttonNextRef}
                additionalClassname={styles.button}
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
