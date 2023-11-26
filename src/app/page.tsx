import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <section className="section">
      <div className="bg-white">
        <Link href="/gallery" className="text-black">
          갤러리로 이동
        </Link>
      </div>
    </section>
  );
}
