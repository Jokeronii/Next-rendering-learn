import 'server-only';

export const serverSideFunction = () => {
  console.log(`
        use multiple lib, 
        use environment variables,
        interact with databases,
        process confidential information,

        `);
  return 'server result';
};
