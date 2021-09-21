import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Button from './Button';
import { ButtonIconLoading } from './Button.styles';

describe('Button', () => {
  let buttonWrapper: ShallowWrapper;
  const onButtonClick = jest.fn();

  beforeEach(() => {
    buttonWrapper = shallow(
      <Button onClick={onButtonClick}>
        <span className="btn">Click me</span>
      </Button>,
    );
  });

  it('renders children when passed in', () => {
    expect(
      buttonWrapper.contains(<span className="btn">Click me</span>),
    ).toEqual(true);
  });

  it('simulates click events', () => {
    buttonWrapper.simulate('click');
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('displays loading icon when isLoading true', () => {
    buttonWrapper.setProps({ isLoading: true });
    expect(buttonWrapper.find(ButtonIconLoading)).toHaveLength(1);
  });

  it('should not display loading icon when isLoading false', () => {
    buttonWrapper.setProps({ isLoading: false });
    expect(buttonWrapper.find(ButtonIconLoading)).toHaveLength(0);
  });

  it('should be disabled when disabled true', () => {
    buttonWrapper.setProps({ disabled: true });
    expect(buttonWrapper.getElement().props.disabled).toBe(true);
  });
});
