import React from 'react';
import { ApplicationHeaderUtility } from '../../src/ApplicationUtility';
import MockConfig from '../../examples/index-examples/MockConfig';

describe('ApplicationHeaderUtility', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const image = <Image />;
  const name = 'name';

  it('should render a header utility with default props', () => {
    const wrapper = shallow(
      <ApplicationHeaderUtility
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a header utility with a username', () => {
    const wrapper = shallow(
      <ApplicationHeaderUtility
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        userName={name}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a header utility with a user photo', () => {
    const wrapper = shallow(
      <ApplicationHeaderUtility
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        userPhoto={image}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a header utility with menu items', () => {
    const wrapper = shallow(
      <ApplicationHeaderUtility
        menuItems={MockConfig()}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
