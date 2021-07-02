import {createStore, compose, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer';

export const middlewares = [thunk];

if (global.__DEV__) {
  const logger = createLogger({collapsed: true});
  middlewares.push(logger);
}

export default compose(applyMiddleware(...middlewares))(createStore)(reducer);
