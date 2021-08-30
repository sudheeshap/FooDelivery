import React from 'react';
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer', () => {
    const footer = mount(<Footer />);

    expect(shallowToJson(footer)).toMatchSnapshot();
  });
});
