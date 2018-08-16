import { NavItemExternal } from '@volst/ui-components';
import R from '../routes';

interface NavItemProps {
  to: string;
  title: string;
  activePath?: string;
  exact?: boolean;
}

export const NavItem = ({ to, ...props }: NavItemProps) => (
  <R.Link route={to} passHref prefetch>
    <NavItemExternal {...props} />
  </R.Link>
);
