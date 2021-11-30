import { Navigiation } from "../classes/Navigation";

export const About = () => {
  const navigiation = new Navigiation();

  const go = () => {
    navigiation.push('/home');
  };


  return {
    dom: `
    <h1 onclick="go()" class="bg-gray-700">about page</h1>
    `,
    func: [go]
  };
};
