import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from '../stores/index.js'
import rootReducer from '../reducers/index.js'
import AppContainer from '../containers/AppContainer.js'

let store = configureStore(rootReducer);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('#react-mount')
)
