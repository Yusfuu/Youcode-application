export class Navigiation {

  constructor() {
    this.routes = [];
  }

  push(path) {
    location.hash = path;
    history.pushState({}, '', path);
    this.routes.push(path);
  }

}