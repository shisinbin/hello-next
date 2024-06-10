import Link from 'next/link';
import React from 'react';

export const dynamic = 'force-dynamic';

function Home() {
  return (
    <main>
      <h1>Hello Next!</h1>
      <p>
        Find out <Link href='/about'>about us</Link>
      </p>
    </main>
  );
}

export default Home;
