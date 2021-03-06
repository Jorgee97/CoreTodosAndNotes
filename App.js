import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import ReduxThunk from 'redux-thunk';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { middleware } from './src/utils/redux';

console.disableYellowBox = true;

const store = createStore(
  AppReducer,
  applyMiddleware(ReduxThunk),
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;