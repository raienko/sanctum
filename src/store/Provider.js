import React from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import store from './index';

const persistor = persistStore(store);

export default function StoreProvider(props) {
  return (
    <Provider store={store}>
      <PersistGate {...props} loading={null} persistor={persistor} />
    </Provider>
  );
}
