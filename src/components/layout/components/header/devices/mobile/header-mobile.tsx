import { useState } from 'react';

import { BurgerIcon, CloseIcon, PhoneIcon } from '@/assets/icons';
import { IconButton } from '@/components/icon-button';
import { Link } from '@/components/link';
import { useScrollLock } from '@/hooks/useScrollLock';

import { Logo } from '../../../logo';
import type { NavbarItemsType } from '../../types/navbar-items';

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
      <IconButton
        icon={<PhoneIcon />}
        additionalClassname={styles.phoneCallButton}
        href="tel:88000001122"
      />
      <IconButton
        icon={<BurgerIcon />}
        onClick={handleNavbarMobileOpen}
        aria-label="Открыть меню"
        aria-expanded={isNavbarMobileOpen}
        aria-controls="burger-menu"
      />

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

            <IconButton
              icon={<CloseIcon />}
              onClick={handleNavbarMobileClose}
              additionalClassname={styles.closeButton}
              aria-label="Закрыть меню"
            />
          </nav>
        </div>
      )}
    </>
  );
};
