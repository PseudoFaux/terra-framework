/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { withRouter, matchPath } from 'react-router-dom';
import NavigationSideMenu from 'terra-navigation-side-menu';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import ApplicationUtils from './ApplicationUtils';

import 'terra-base/lib/baseStyles';

import styles from './PrimaryNavigationMenu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The array of navigation Objects to be rendered as items within the navigation menu.
   */
  navigationItems: ApplicationUtils.navigationItemsPropType,
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: ApplicationUtils.layoutConfigPropType,
  /**
   * The Object containing RoutingStack APIs provided to children of the RoutingStack.
   */
  routingStackDelegate: RoutingStackDelegate.propType,
  /**
   * The location from the router context. This prop is provided by the `withRouter` HOC-generator.
   */
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

const navMenuKey = 'navigationMenu';

class PrimaryNavigationMenu extends React.Component {
  static buildChildSideNavItems(items) {
    return items.map(item => ({
      key: item.path,
      text: item.text,
      hasSubMenu: item.hasSubMenu,
      metaData: {
        // metaData is added to the item to make the change handler's life easier.
        url: item.path,
        hasSubMenu: item.hasSubMenu,
      },
    }));
  }

  constructor(props) {
    super(props);

    this.handleMenuChange = this.handleMenuChange.bind(this);

    let selectedChildKey;

    // If the provided location matches one of the navigation items, that item is marked as selected.
    props.navigationItems.forEach((route) => {
      if (matchPath(props.location.pathname, { path: route.path })) {
        selectedChildKey = route.path;
      }
    });

    this.state = {
      selectedMenuKey: navMenuKey,
      selectedChildKey,
    };
  }

  handleMenuChange(event, data) {
    if (!data.metaData) {
      return;
    }

    const { routingStackDelegate, layoutConfig } = this.props;

    /**
     * The menu will be toggled closed if no submenus exist for the selected item.
     */
    if (!data.metaData.hasSubMenu && layoutConfig.toggleMenu) {
      layoutConfig.toggleMenu().then(() => {
        routingStackDelegate.show({ path: data.metaData.url });
      });
    } else {
      routingStackDelegate.show({ path: data.metaData.url });
    }

    this.setState({
      selectedMenuKey: data.selectedMenuKey,
      selectedChildKey: data.selectedChildKey,
    });
  }

  render() {
    const { routingStackDelegate, navigationItems } = this.props;

    if (!navigationItems.length) {
      return (
        <div className={cx('placeholder')} />
      );
    }

    const childItems = PrimaryNavigationMenu.buildChildSideNavItems(navigationItems);

    return (
      <NavigationSideMenu
        menuItems={[
          { key: navMenuKey, childKeys: childItems.map(item => (item.key)), isRootMenu: true },
        ].concat(...childItems)}
        onChange={this.handleMenuChange}
        routingStackBack={routingStackDelegate.showParent}
        selectedMenuKey={this.state.selectedMenuKey}
        selectedChildKey={this.state.selectedChildKey}
      />
    );
  }
}

PrimaryNavigationMenu.propTypes = propTypes;

export default withRouter(PrimaryNavigationMenu);