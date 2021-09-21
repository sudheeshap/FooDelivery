import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';

import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer', () => {
    const footer = mount(<Footer />);

    expect(mountToJson(footer)).toMatchSnapshot();
  });
});
