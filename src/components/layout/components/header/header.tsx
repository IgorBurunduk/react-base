import { Container } from '@/components/container';
import { useWindowSize } from '@/hooks/useWindowSize';

import { HeaderDesktop } from './devices/desktop/header-desktop';
import { HeaderMobile } from './devices/mobile/header-mobile';
import type { NavbarItemsType } from './types/navbar-items';

import styles from './header.module.scss';

const navbarItems: NavbarItemsType = [
  {
    id: 1,
    title: 'О школе',
    href: '#status',
  },
  {
    id: 2,
    title: 'Тренеры',
    href: '#teachers',
  },
  {
    id: 3,
    title: 'Стоимость',
    href: '#packages',
  },
];

export const Header = () => {
  const { isTablet } = useWindowSize();

  return (
    <header className={styles.header}>
      <Container isWide>
        <div className={styles.content}>
          {isTablet ? (
            <HeaderMobile navbarItems={navbarItems} />
          ) : (
            <HeaderDesktop navbarItems={navbarItems} />
          )}
        </div>
      </Container>
    </header>
  );
};
