import { Logo } from '@/components/layout/components/logo';
import { PhoneCallButton } from '@/components/layout/components/phone-call-button';
import { Link } from '@/components/link';
import type { NavbarItemsType } from '@/types/navbar-items';

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
        <ul className={styles.navbar}>
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
