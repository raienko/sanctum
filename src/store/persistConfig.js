import storage from '@react-native-async-storage/async-storage';
import stateReconciler from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default {
  key: 'root',
  stateReconciler,
  keyPrefix: '',
  storage,
};
