import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  _storage;

  constructor(storage) {
    this._storage = storage;
  }
  async setItem(key, value) {
    return this._storage.setItem(key, JSON.stringify(value));
  }
  async getItem(key) {
    const data = await this._storage.getItem(key);
    return data ? JSON.stringify(data) : data;
  }
}

export default new LocalStorage(AsyncStorage);
