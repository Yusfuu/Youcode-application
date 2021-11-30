import { Navigiation } from "../classes/Navigation";
export const Home = () => {
  const navigiation = new Navigiation();

  const go = () => {
    navigiation.push('/about');
  };

  return {
    dom: `
      <h1 onclick="go()" class="bg-red-700">home page</h1>
    `,
    func: [go]
  };
};

// useEffect(() => {
//   console.log('loaded');
// }, []);

// const useEffect = (
//   func,
//   dependencies
// ) => {
//   func();
// };