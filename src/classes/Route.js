class Route {
  //Getters
  get pathName() {
    return window.location.pathname;
  }
  //Methods
  pushState(state) {
    history.pushState({}, "", state);
    document.title = state;
  }
}
