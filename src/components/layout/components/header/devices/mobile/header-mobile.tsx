import { useState } from 'react';

import { BurgerIcon, CloseIcon, PhoneIcon } from '@/assets/icons';
import { Button } from '@/components/button';
import { Logo } from '@/components/layout/components/logo';
import { Link } from '@/components/link';
import { useScrollLock } from '@/hooks/useScrollLock';
import type { NavbarItemsType } from '@/types/navbar-items';

import styles from './header-mobile.module.scss';

interface HeaderMobileProps {
  navbarItems: NavbarItemsType;
}

export const HeaderMobile = (headerMobileProps: HeaderMobileProps) => {
  const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const { navbarItems } = headerMobileProps;

  const handleNavbarMobileOpen = () => {
    setIsNavbarMobileOpen(true);
    lockScroll();
  };

  const handleNavbarMobileClose = () => {
    setIsNavbarMobileOpen(false);
    unlockScroll();
  };

  return (
    <>
      <Logo />
      <Link
        href="tel:88000001122"
        additionalClassname={`${styles.iconButton} ${styles.phoneCallButton}`}
      >
        <PhoneIcon />
      </Link>
      <Button
        variant="text"
        onClick={handleNavbarMobileOpen}
        additionalClassname={styles.iconButton}
        aria-label="Открыть меню"
        aria-expanded={isNavbarMobileOpen}
        aria-controls="burger-menu"
      >
        <BurgerIcon />
      </Button>

      {isNavbarMobileOpen && (
        <div className={styles.navbarContainer}>
          <nav
            id="burger-menu"
            role="menu"
            aria-hidden={!isNavbarMobileOpen}
            className={styles.navbar}
          >
            <ul className={styles.menu}>
              {navbarItems.map((navbarItem) => (
                <li key={navbarItem.id}>
                  <Link
                    href={`${navbarItem.href}`}
                    onClick={handleNavbarMobileClose}
                    additionalClassname={styles.link}
                  >
                    {navbarItem.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Button
              variant="text"
              onClick={handleNavbarMobileClose}
              aria-label="Закрыть меню"
              additionalClassname={`${styles.iconButton} ${styles.closeButton}`}
            >
              <CloseIcon />
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};
