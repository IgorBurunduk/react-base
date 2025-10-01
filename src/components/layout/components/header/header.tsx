import { Container } from '@/components/container';
import { HeaderDesktop } from '@/components/layout/components/header/devices/desktop/header-desktop';
import { HeaderMobile } from '@/components/layout/components/header/devices/mobile/header-mobile';
import { useWindowSize } from '@/hooks/useWindowSize';
import type { NavbarItemsType } from '@/types/navbar-items';

import styles from './header.module.scss';

export const Header = () => {
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
