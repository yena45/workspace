import { ReactNode } from 'react';

export default function ParallelLayout({
  children,
  login,
  profile,
}: {
  children: ReactNode;
  login: ReactNode;
  profile: ReactNode;
}) {
  return (
    <>
      <h1 className='text-2xl'></h1>
    </>
  );
}
