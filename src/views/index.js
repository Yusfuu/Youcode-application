import { Home } from "./Home";
import { _404 } from "./_404";
import { About } from "./About";

export const routes = [
  {
    path: ["/", "/home"],
    component: Home
  },
  {
    path: ["/about"],
    component: About
  },
  {
    exception: true,
    path: [],
    component: _404
  }
];

