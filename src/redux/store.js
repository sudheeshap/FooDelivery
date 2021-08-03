import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './root-reducer';
import INITIAL_STATE from './initial-state';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: INITIAL_STATE,
});

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./root-reducer', () => store.replaceReducer(rootReducer));
}

export default store;
