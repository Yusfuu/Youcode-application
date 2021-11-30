import "./style.css";
import { Home, _404, About } from "./views";
const render = (view) => {
  document.querySelector("#app").innerHTML = view();
};

window.addEventListener("hashchange", () => {
  const route = window.location.pathname;
  switch (route) {
    case "/home":
      render(Home);
      break;
    case "/about":
      render(About);
      break;
    default:
      render(_404);
  }
});

const route = window.location.pathname;
switch (route) {
  case "/home":
    render(Home);
    break;
  case "/about":
    render(About);
    break;
  default:
    render(_404);
}
