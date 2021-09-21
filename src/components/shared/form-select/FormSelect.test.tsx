import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import FormSelect from './FormSelect';

describe('FormSelect', () => {
  let formSelectWrapper: ShallowWrapper;
  const onSelectChange = jest.fn();
  const selectOptions = [
    { value: 'apple', text: 'Apple' },
    { value: 'orange', text: 'Orange' },
  ];

  beforeEach(() => {
    formSelectWrapper = shallow(
      <FormSelect options={selectOptions} onChange={onSelectChange}>
        <span className="btn">Click me</span>
      </FormSelect>,
    );
  });

  it('simulates change event', () => {
    formSelectWrapper.simulate('change');
    expect(onSelectChange).toHaveBeenCalledTimes(1);
  });

  it('displays default value from props', () => {
    formSelectWrapper.setProps({ selected: 'apple' });
    expect(formSelectWrapper.get(0).props.defaultValue).toEqual('apple');
  });

  it('should be disabled when disabled true', () => {
    formSelectWrapper.setProps({ disabled: true });
    expect(formSelectWrapper.getElement().props.disabled).toBe(true);
  });
});
