import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { matchPath } from 'react-router-dom';
import TabUtils from './_TabUtils';
import styles from './ApplicationTabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: PropTypes.object.isRequired,
  /**
   * The path to push to the route.
   */
  path: PropTypes.string.isRequired,
  /**
   * The display text for the tab.
   */
  text: PropTypes.string.isRequired,
  /**
   * The click callback of the tab..
   */
  onTabClick: PropTypes.func,
};

class CollapsedTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focused: false, mouseWasClicked: false };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.isCurrentPath = this.isCurrentPath.bind(this);
  }

  handleOnBlur() {
    this.setState({ focused: false });
  }

  handleKeyDown(event) {
    // Add active state to FF browsers
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.SPACE) {
      this.setState({ active: true });
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.SPACE || event.nativeEvent.keyCode === TabUtils.KEYCODES.ENTER) {
      this.setState({ focused: true });

      event.preventDefault();
      this.handleOnClick(event);
    }
  }

  handleKeyUp(event) {
    // Remove active state from FF broswers
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.SPACE) {
      this.setState({ active: false });
    }

    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.TAB) {
      this.setState({ focused: true });
    }
  }

  isCurrentPath() {
    return !!matchPath(this.props.location.pathname, { path: this.props.path });
  }

  handleOnClick(event) {
    if (!this.isCurrentPath()) {
      this.props.history.push(this.props.path);
    }
    if (this.props.onTabClick) {
      this.props.onTabClick(event);
    }
  };

  render() {
    const {
      history,
      location,
      onTabClick,
      path,
      text,
      ...customProps
    } = this.props;
    
    const tabClassNames = cx([
      'collapsed-tab',
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
      customProps.className,
    ]);
    const tabAttr = { 'aria-current': this.isCurrentPath() };

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        {...customProps}
        {...tabAttr}
        tabIndex="0"
        className={tabClassNames}
        onClick={this.handleOnClick}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
      >
        <span className={cx(['tab-inner'])}>
          {text}
        </span>
      </div>
      /* eslint-enable jsx-ally/no-static-element-interactions */
    );
  }
}

CollapsedTab.propTypes = propTypes;

export default CollapsedTab;