import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import App from './App';
import './index.css';
import bucksApp from './reducers';
import registerServiceWorker from './utilities/registerServiceWorker';

const store = createStore(bucksApp, devToolsEnhancer({}));
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
