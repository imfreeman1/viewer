import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <section className="p-6 min-h-full max-h-screen flex justify-center">
      <div className="bg-white">
        <Link href="/gallery" className="text-black">
          갤러리로 이동
        </Link>
      </div>
    </section>
  );
}
