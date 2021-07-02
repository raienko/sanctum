import {persistReducer} from 'redux-persist';
import persistConfig from 'src/store/persistConfig';
import types from './types';

export const initialState = {
  online: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ONLINE_STATUS:
      return {
        ...state,
        online: action.payload.online,
      };
    case types.RESET_STORES:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};

export default persistReducer(
  {
    ...persistConfig,
    key: 'system',
    blacklist: ['online'],
  },
  reducer,
);
