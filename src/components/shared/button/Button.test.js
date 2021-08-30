import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';
import { ButtonIconLoading } from './Button.styles';

describe('Button', () => {
  let button = null;
  const onButtonClick = jest.fn();

  beforeEach(() => {
    button = shallow(
      <Button onClick={onButtonClick}>
        <span className="btn">Click me</span>
      </Button>,
    );
  });

  it('renders children when passed in', () => {
    expect(button.contains(<span className="btn">Click me</span>)).toEqual(
      true,
    );
  });

  it('simulates click events', () => {
    button.simulate('click');
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('displays loading icon when isLoading true', () => {
    button.setProps({ isLoading: true });
    expect(button.find(ButtonIconLoading)).toHaveLength(1);
  });

  it('should not display loading icon when isLoading false', () => {
    button.setProps({ isLoading: false });
    expect(button.find(ButtonIconLoading)).toHaveLength(0);
  });

  it('should be disabled when disabled true', () => {
    button.setProps({ disabled: true });
    console.log(button);
    expect(button.props().disabled).toBe(true);
  });
});
