import { Navigation, Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType, SwiperOptions } from 'swiper/types';

export const createSwiperConfig = (
  scrollbarEl?: HTMLElement | null,
  dragClass?: string,
  isMobile?: boolean,
): SwiperOptions => {
  return {
    scrollbar: {
      draggable: true,
      el: scrollbarEl,
      dragClass,
    },
    spaceBetween: 40,
    slidesPerView: isMobile ? 'auto' : 3,
    modules: [Scrollbar, Navigation],
  };
};
