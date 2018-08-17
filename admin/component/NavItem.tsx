import React from 'react';
import { NavItemExternal } from '@volst/ui-components';
import { withRouter, WithRouterProps } from 'next/router';
// import R from '../routes';

interface NavItemProps {
  to: string;
  title: string;
  activePath?: string;
  exact?: boolean;
}

class MyNavItem extends React.Component<NavItemProps & WithRouterProps> {
  componentDidMount() {
    this.props.router.prefetch(this.props.to);
  }
  navigate = (e: any) => {
    e.preventDefault();
    this.props.router.push(this.props.to);
  };
  checkActive() {
    const { to, activePath, router, exact } = this.props;
    const actualTo = activePath || to;
    if (exact) {
      return router.asPath === actualTo;
    }
    return router.asPath.startsWith(actualTo);
  }
  render() {
    return (
      <NavItemExternal
        title={this.props.title}
        href={this.props.to}
        onClick={this.navigate}
        className={`nav-item ${this.checkActive() ? 'active' : ''}`}
      />
    );
  }
}

export const NavItem = withRouter(MyNavItem);
