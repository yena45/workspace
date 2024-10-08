import { PropsWithChildren } from 'react';

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <>
      \<h1 className='text-2xl'>about</h1>
      {children}
    </>
  );
}
