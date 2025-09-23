import { Scrollbar } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

export const createSwiperConfig = (
  scrollbarEl?: HTMLElement | null,
  dragClass?: string,
): SwiperOptions => {
  return {
    scrollbar: {
      draggable: true,
      el: scrollbarEl,
      dragClass,
    },
    spaceBetween: 40,
    slidesPerView: 'auto',
    modules: [Scrollbar],
  };
};
