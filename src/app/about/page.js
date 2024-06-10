import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>It's about stuff.</p>
      <Link href='/'>Back Home</Link>
    </main>
  );
}
