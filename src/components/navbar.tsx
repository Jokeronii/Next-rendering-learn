import { NavLinks } from './nav-links';
import { NavSearch } from './nav-search';

export const Navbar = () => {
  console.log(`navbar rendered`);

  return (
    <>
      <NavLinks />
      <NavSearch />
    </>
  );
};
