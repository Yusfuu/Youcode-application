import { routes } from "../views/index";
export class Route {

  constructor() {
    this.routes = routes;
    this.currentRoute = null;
  }

  //Getters
  getpathName() {
    let clone = window.location.pathname.substring(1);
    clone = `${clone[0].toUpperCase()}${clone.slice(1)}`;
    return clone;
  }
  //Methods
  pushState(state) {
    location.hash = state;
    history.pushState({}, "", state);
    document.title = state;
  }

  render(view) {
    document.querySelector("#app").innerHTML = view().dom;
  }

  entryPoint() {
    this.currentRoute = this.getpathName();
    this.render(this.routes[this.currentRoute]);
    const xx = this.routes[this.currentRoute]().func;
    xx.map(x => {
      let n = x.name
      window[n] = x
    })
  }

  goto(path) {
    location.hash = path;
    history.pushState({}, '', path);
    document.title = path;
  }

  init() {
    this.entryPoint();
    window.goto = this.goto;
    window.addEventListener("hashchange", () => {
      this.entryPoint();
    });
  }

}
