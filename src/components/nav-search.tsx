'use client';

import { useState } from 'react';

export const NavSearch = () => {
  const [search, setSearch] = useState('');

  console.log(`nav search rendered`);
  return <h1>search</h1>;
};
