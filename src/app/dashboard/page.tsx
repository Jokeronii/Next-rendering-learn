'use client';
import { useState } from 'react';

export default function DashboardPage() {
  const [value, setValue] = useState('');

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <p>hello {value}</p>
      </div>
    </>
  );
}
