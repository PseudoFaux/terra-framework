import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Arrange from 'terra-arrange';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import MenuDivider from '../_UtilityMenuDivider';
import Utils from '../_Utils';
import styles from './_HeaderUtilityMenuPage.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * the Object containing data pertaining to this specific page.
   */
  pageData: PropTypes.shape({
    Title: PropTypes.string,
    Content: PropTypes.element,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  /**
   * Function to trigger when an item is selected.
   */
  onChange: PropTypes.func.isRequired,
};

class HeaderUtilityMenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {};
  }

  handleKeyDown(event, key) {
    if (event.nativeEvent.keyCode === Utils.KEY_CODES.ENTER || event.nativeEvent.keyCode === Utils.KEY_CODES.SPACE || event.nativeEvent.keyCode === Utils.KEY_CODES.RIGHT_ARROW) {
      this.props.onChange(event, key);
    }
  }

  render() {
    const {
      pageData,
      onChange,
      ...customProps
    } = this.props;

    const menuPageClassNames = cx('menu-page');
    const listItemClassNames = cx('list-item');
    const chevronClassNames = cx('chevron');
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    const listItemArr = pageData.children.map((child) => {
      if (child.content) {
        return (
          <div key={child.key}>
            <li tabIndex="0" onClick={event => onChange(event, child.key)} onKeyDown={event => this.handleKeyDown(event, child.key)} role="button" className={listItemClassNames}>
              {child.content}
            </li>
            { child.key === 'user-information' && <MenuDivider key={`${child.key}-divider`} />}
          </div>
        );
      }
      return (
        <li tabIndex="0" onClick={event => onChange(event, child.key)} onKeyDown={event => this.handleKeyDown(event, child.key)} role="button" key={child.key} className={listItemClassNames}>
          <Arrange
            fill={<div>{child.title}</div>}
            fitEnd={child.children && !child.content ? <IconChevronRight className={chevronClassNames} /> : null}
            align={'center'}
          />
        </li>
      );
    });
    /* eslint-enable jsx-a11y/no-static-element-interactions */
    return (
      <ul{...customProps} className={menuPageClassNames}>
        {listItemArr}
      </ul>
    );
  }
}

HeaderUtilityMenuPage.propTypes = propTypes;

export default HeaderUtilityMenuPage;
