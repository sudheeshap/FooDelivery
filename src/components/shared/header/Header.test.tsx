import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mountToJson } from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import INITIAL_STATE from '../../../redux/initial-state';
import * as selectors from '../../../redux/customer/customer.selectors';

let headerWrapper: ReactWrapper;
const mockLogout = jest.fn();

jest.mock('../../../hooks/useAuth.js', () => ({
  useAuth: () => ({
    logout: mockLogout,
  }),
}));

const wrapperFactory = () => {
  const mockStore = configureStore([]);
  const store = mockStore(INITIAL_STATE);

  return mount(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
};

describe('Header', () => {
  afterEach(() => {
    if (headerWrapper) {
      headerWrapper.unmount();
    }
  });

  it('renders the header', () => {
    headerWrapper = wrapperFactory();

    expect(mountToJson(headerWrapper)).toMatchSnapshot();
  });

  it('displays login link if user not logged in', () => {
    jest.spyOn(selectors, 'selectCustomerIsLoggedIn').mockReturnValue(false);

    headerWrapper = wrapperFactory();

    expect(
      headerWrapper.find('[data-testid="link-login"]').exists(),
    ).toBeTruthy();

    expect(
      headerWrapper.find('[data-testid="link-logout"]').exists(),
    ).toBeFalsy();
  });

  it('displays logout link when user is logged in', () => {
    jest.spyOn(selectors, 'selectCustomerIsLoggedIn').mockReturnValue(true);

    headerWrapper = wrapperFactory();

    expect(
      headerWrapper.find('[data-testid="link-logout"]').exists(),
    ).toBeTruthy();

    expect(
      headerWrapper.find('[data-testid="link-login"]').exists(),
    ).toBeFalsy();
  });

  it('should call logout() when clicking logout link', () => {
    jest.spyOn(selectors, 'selectCustomerIsLoggedIn').mockReturnValue(true);

    headerWrapper = wrapperFactory();
    headerWrapper.find('[data-testid="link-logout"]').at(0).simulate('click');

    expect(mockLogout).toHaveBeenCalled();
  });
});
