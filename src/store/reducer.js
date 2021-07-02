import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import system from './system/reducer';
import persistConfig from './persistConfig';

export default persistReducer(
  {
    ...persistConfig,
    blacklist: ['system'],
  },
  combineReducers({
    system,
  }),
);
