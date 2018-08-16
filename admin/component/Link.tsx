import { ExternalLink, Tone } from '@volst/ui-components';
import R from '../routes';

interface LinkProps {
  to: string;
  prefetch?: boolean;
  children: React.ReactNode;
  link?: boolean;
  ghost?: boolean;
  tone?: Tone;
}

export const Link = ({ children, to, prefetch, ...props }: LinkProps) => (
  <R.Link route={to} passHref prefetch={prefetch}>
    <ExternalLink {...props}>{children}</ExternalLink>
  </R.Link>
);
