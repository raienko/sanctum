import ref from './ref';

class Navigation {
  _ref;

  constructor(navigationContainer) {
    this._ref = navigationContainer;
  }

  navigate(screen, options) {
    this._ref.current.navigate(screen, options);
  }

  goBack() {
    this._ref.current.goBack();
  }
}

export default new Navigation(ref);
