import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const propTypes = {
  test: PropTypes.string,
};

const Column = ({ name, cellCount }) => (
  <div className={cx('column')}>
    {(new Array(cellCount)).fill().map((derp, index) => index === 0 ? (
      <div className={cx('header-cell')}>{name}</div>
    ) : (
      <div className={cx('cell')}>Cell {index}</div>
    ))}
  </div>
);

const columnSet = (num) => {
  const columns = [];
  for (let i = 0; i < num; i += 1) {
    columns.push((
      <Column name={`Column ${i}`} cellCount={100} />
    ));
  }
  return columns;
};

class DataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.updateRefs = this.updateRefs.bind(this);
    this.syncOverlayScroll = this.syncOverlayScroll.bind(this);

    this.enableOverlay = this.enableOverlay.bind(this);
    this.disableOverlay = this.disableOverlay.bind(this);

    // this.handleContainerScroll = this.handleContainerScroll.bind(this);
    this.handleFillScroll = this.handleFillScroll.bind(this);

    this.state = {

    };
  }

  componentDidMount() {
    this.overlayRef.addEventListener('scroll', this.syncOverlayScroll);
    // this.containerRef.addEventListener('scroll', this.handleContainerScroll);
    this.filledRef.addEventListener('scroll', this.handleFillScroll);

    this.updateRefs();
  }

  enableOverlay() {
    this.overlayRef.style.display = 'block';
  }

  disableOverlay() {
    this.overlayRef.style.display = 'none';
  }

  componentWillUnmount() {
    this.overlayRef.removeEventListener('scroll', this.syncOverlayScroll);
    // this.containerRef.removeEventListener('scroll', this.handleContainerScroll);
    this.filledRef.removeEventListener('scroll', this.handleFillScroll);
  }

  syncOverlayScroll() {
    console.log('scrolling');

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = setTimeout(() => {
      this.disableOverlay();
    }, 50);

    this.containerRef.scrollTop = this.overlayRef.scrollTop;
    this.filledRef.scrollLeft = this.overlayRef.scrollLeft;
  }

  handleFillScroll() {
    this.enableOverlay();

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = setTimeout(() => {
      this.disableOverlay();
    }, 50);
  }

  updateRefs() {
    this.fixedRef.style.height = `${this.fixedRef.scrollHeight}px`;
    this.filledRef.style.height = `${this.fixedRef.scrollHeight}px`;

    this.overlayRef.style.left = `${this.fixedRef.clientWidth}px`;
    this.overlayContentRef.style.width = `${this.filledRef.scrollWidth}px`;
    this.overlayContentRef.style.height = `${this.filledRef.scrollHeight}px`;
  }

  componentDidUpdate() {
    this.updateRefs();
  }

  render() {
    return (
      <div className={cx('data-grid-container')}>
        <div ref={(overlayRef) => { this.overlayRef = overlayRef; }} className={cx('overlay')}>
          <div ref={(overlayContentRef) => { this.overlayContentRef = overlayContentRef; }} className={cx('overlay-content')} />
        </div>
        <div ref={(containerRef) => { this.containerRef = containerRef; }}className={cx(['container', 'container-size-1'])}>
          <div ref={(fixedRef) => { this.fixedRef = fixedRef; }} className={cx('fixed')}>
            {columnSet(3)}
          </div>
          <div ref={(filledRef) => { this.filledRef = filledRef; }} className={cx('fill')}>
            {columnSet(30)}
          </div>
        </div>
      </div>
    );
  }
}

DataGrid.propTypes = propTypes;

export default DataGrid;
