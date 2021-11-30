export class Navigiation {

  constructor() { }

  push(path) {
    location.hash = path;
    history.pushState({}, '', path);
  }

}