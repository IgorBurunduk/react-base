import { Scrollbar } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

interface swiperConfigType {
  swiperConfig: SwiperOptions;
  isMobile?: boolean;
}

export const createSwiperConfig = ({ swiperConfig, isMobile }: swiperConfigType): SwiperOptions => {
  return {
    spaceBetween: 40,
    slidesPerView: isMobile ? 'auto' : 3,
    modules: [Scrollbar],
    ...swiperConfig,
  };
};
