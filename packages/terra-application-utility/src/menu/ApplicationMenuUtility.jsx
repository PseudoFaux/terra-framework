import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import AppDelegate from 'terra-app-delegate';
import Button from 'terra-button';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import UtilityMenu from './_MenuUtilityMenu';
import Utils from '../_Utils';
import styles from './ApplicationMenuUtility.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The config file containing additional items to be rendered within the menu.
   */
  additionalItemsConfig: PropTypes.array,
  /**
   * The config file containing the static menu items to be rendered within the menu.
   */
  menuConfig: PropTypes.object.isRequired,
  /**
   * The AppDelegate instance propogated to each child.
   */
  app: AppDelegate.propType,
  /**
   * The function to trigger when a menu item is selected.
   */
  onChange: PropTypes.func.isRequired,
    /**
   * The function that discloses the menu.
   */
  onDisclose: PropTypes.func.isRequired,
  /**
   * The name to be displayed next to the user photo.
   */
  userName: PropTypes.string.isRequired,
  /**
   * The image associated with the user.
   */
  userPhoto: PropTypes.element.isRequired,
};

const defaultProps = {
  additionalItemsConfig: [],
};

class ApplicationMenuUtility extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.createContent = this.createContent.bind(this);
  }

  handleOnClick() {
    if (this.props.onDisclose) {
      const content = this.createContent();
      this.props.onDisclose(content);
    }
  }

  createContent() {
    return (
      <UtilityMenu
        app={this.props.app}
        additionalItemsConfig={this.props.additionalItemsConfig}
        menuConfig={this.props.menuConfig}
        onChange={this.props.onChange}
      />
    );
  }

  render() {
    const {
      additionalItemsConfig,
      app,
      menuConfig,
      onChange,
      onDisclose,
      userName,
      userPhoto,
      ...customProps
    } = this.props;

    const utilityClassNames = cx(['header-utility', customProps.className]);
    const userContainerClassNames = cx('user-container');
    const userPhotoClassNames = cx('user-photo');
    const userNameClassNames = cx('user-name');
    const iconClassNames = cx('icon');
    const photo = React.cloneElement(userPhoto, { className: userPhotoClassNames });
    // TODO: Change button variant to de-emphasis on react 16 uplift.
    return (
      <Button {...customProps} className={utilityClassNames} onClick={this.handleOnClick} variant="link">
        <span className={userContainerClassNames}>
          {photo}
          <span className={userNameClassNames}>{userName} </span>
        </span>
        {<IconChevronRight className={iconClassNames} />}
      </Button>
    );
  }
}

ApplicationMenuUtility.propTypes = propTypes;
ApplicationMenuUtility.defaultProps = defaultProps;
ApplicationMenuUtility.keys = Utils.KEYS;
ApplicationMenuUtility.titles = Utils.TITLES;

export default ApplicationMenuUtility;
