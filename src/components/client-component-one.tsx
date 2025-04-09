'use client';

import React, { useState } from 'react';
// import { ClientComponentTwo } from './client-component-two';
// import { ServerComponentOne } from './server-component-one';

export const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('batman');

  return (
    <>
      <h1>client component one</h1>
      {children}

      {/* <ClientComponentTwo /> */}
    </>
  );
};
