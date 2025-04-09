import { serverSideFunction } from '@/utils/server-utils';
// import { clientSidefunction } from '@/utils/client-utils';

export default function ServerRoutePage() {
  const serverResult = serverSideFunction();
  // const clientResult = clientSidefunction(); // This will not work on server-side
  return (
    <>
      <h1>
        Server route {serverResult} ,{/* {clientResult} */}
      </h1>
    </>
  );
}
