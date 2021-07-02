import store from 'src/store';
import types from './types';

export const setOnlineStatus = online => {
  return store.dispatch({
    type: types.SET_ONLINE_STATUS,
    payload: {
      online,
    },
  });
};

export const resetStores = () =>
  store.dispatch({
    type: types.RESET_STORES,
  });
