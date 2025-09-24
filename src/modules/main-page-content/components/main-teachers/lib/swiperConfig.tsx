import { Navigation, Scrollbar } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

export const createSwiperConfig = (
  scrollbarEl?: HTMLElement | null,
  dragClass?: string,
  buttonPrevEl?: HTMLElement | null,
  buttonNextEl?: HTMLElement | null,
): SwiperOptions => {
  return {
    scrollbar: {
      draggable: true,
      el: scrollbarEl,
      dragClass,
    },
    spaceBetween: 40,
    slidesPerView: 'auto',
    modules: [Scrollbar, Navigation],
    navigation: {
      prevEl: buttonPrevEl,
      nextEl: buttonNextEl,
    },
  };
};
