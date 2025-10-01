import { Logo } from '@/components/layout/components/logo';
import type { NavbarItemsType } from '@/types/navbar-items';

interface HeaderMobileProps {
  navbarItems: NavbarItemsType;
}

export const HeaderMobile = (headerMobileProps: HeaderMobileProps) => {
  const { navbarItems } = headerMobileProps;
  return (
    <>
      <Logo />
    </>
  );
}