import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './App';
import Header from './components/shared/header/Header';
import INITIAL_STATE from './redux/initial-state';
import Footer from './components/shared/footer/Footer';

describe('App', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(INITIAL_STATE);

    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.find(App).length).toEqual(1);
  });

  it('renders a Header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders a main element', () => {
    expect(wrapper.find('main')).toHaveLength(1);
  });

  it('renders a Footer element', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
