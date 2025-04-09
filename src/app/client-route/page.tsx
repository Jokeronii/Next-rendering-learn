'use client';

import { useTheme } from '@/components/theme-provider';
import { clientSidefunction } from '@/utils/client-utils';
// import { serverSideFunction } from '@/utils/server-utils';

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSidefunction();

  // const result = serverSideFunction();
  return (
    <>
      <h1 style={{ color: theme.colors.secondary }}>use client component</h1>
      <p>{result}</p>
    </>
  );
}
