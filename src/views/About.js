import { Navigiation } from "../classes/Navigation";

export const About = () => {
  const navigiation = new Navigiation();

  const increment = () => {
    navigiation.push('/about');
  };


  return {
    dom: `
    <h1 onclick="increment()" class="bg-gray-700">about page</h1>
    `,
    func: []
  };
};
