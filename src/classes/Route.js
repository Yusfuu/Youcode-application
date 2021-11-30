import { routes } from "../views/index";
export class Route {

  constructor() {
    this.routes = routes;
    this.currentRoute = null;
  }

  //Getters
  getpathName() {
    return window.location.pathname;
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
    let isRender = false;
    this.currentRoute = this.getpathName();

    this.routes.map(route => {
      const include = route.path.includes(this.currentRoute);
      if (include) {
        const component = route.component;
        this.render(component);

        component().func.forEach((el) => {
          window[el.name] = el
        });

        isRender = true;
        console.log();
      }


      console.log();
    })

    if (!isRender) {
      const route = this.routes.find(route => route.exception);
      this.render(route.component);
    }
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
