/* Babel Polyfill */
import babelPolyfill from 'babel-polyfill';

/* Redux */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';

/* LeanCloud */
import AV from 'avoscloud-sdk';

/* SiteMaster tracking */
import tracking from './tracking';

/* React Router */
import * as reactRouter from 'react-router';

/* Reducers */
import * as reducers from './reducers';

/* App configs */
import config from './config';

/* Initial LeanCloud */
AV.initialize(config.leanCloud.id, config.leanCloud.key);

/* Combine Reducers */
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

/* Initial the store */
const configureStore = (initialState) => {
  // Initial the redux devtools for Chrome
  // https://github.com/zalmoxisus/redux-devtools-extension/
  const createdStore = createStore(reducer, initialState, compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers');
      const nextReducer = combineReducers({
        ...reducers,
        routing: routerReducer
      });
      store.replaceReducer(nextReducer);
    });
  }

  return createdStore;
}
export const store = configureStore();

/* Initial history */
export const history = syncHistoryWithStore(
  reactRouter[config.historyBackend], store
)

/* Tracking pageviews with SiteMaster */
tracking(config.siteMaster.siteId, history);
