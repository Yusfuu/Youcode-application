import { Navigiation } from "../classes/Navigation";
export const Home = () => {
  const navigiation = new Navigiation();

  const increment = () => {
    navigiation.push('/about');
  };

  const link = () => {
    navigiation.push('/about');
  };

  return {
    dom: `
      <h1 onclick="link()" class="bg-red-700">home page</h1>
    `,
    func: [increment, link]
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