import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import FormInput from './FormInput';

describe('FormInput', () => {
  let formInputWrapper: ShallowWrapper;
  const onInputChange = jest.fn();

  beforeEach(() => {
    formInputWrapper = shallow(
      <FormInput onChange={onInputChange}>
        <span className="btn">Click me</span>
      </FormInput>,
    );
  });

  it('simulates change event', () => {
    formInputWrapper.find('input').simulate('change');
    expect(onInputChange).toHaveBeenCalledTimes(1);
  });

  it('displays default value from props', () => {
    formInputWrapper.setProps({ value: 'Apple' });
    expect(formInputWrapper.find('input').get(0).props.defaultValue).toEqual(
      'Apple',
    );
  });

  it('renders correct type', () => {
    formInputWrapper.setProps({ type: 'submit' });
    expect(formInputWrapper.find('input').get(0).props.type).toEqual('submit');

    formInputWrapper.setProps({ type: 'button' });
    expect(formInputWrapper.find('input').get(0).props.type).toEqual('button');
  });

  it('should be disabled when disabled true', () => {
    formInputWrapper.setProps({ disabled: true });
    expect(formInputWrapper.find('input').props().disabled).toBe(true);
  });
});
