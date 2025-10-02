import { Link } from '@/components/link';

import { Logo } from '../../../logo';
import { PhoneCallButton } from '../../../phone-call-button';
import type { NavbarItemsType } from '../../types/navbar-items';

import styles from './header-desktop.module.scss';

interface HeaderDesktopProps {
  navbarItems: NavbarItemsType;
}

export const HeaderDesktop = (headerDesktopProps: HeaderDesktopProps) => {
  const { navbarItems } = headerDesktopProps;

  return (
    <>
      <Logo />
      <nav>
        <ul className={styles.navbarMenu}>
          {navbarItems.map((navbarItem) => (
            <li key={navbarItem.id}>
              <Link href={`${navbarItem.href}`}>{navbarItem.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <PhoneCallButton />
    </>
  );
};
