import Navbar from '@/components/client/Navbar';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header>
      <div className="sticky flex justify-between px-4 bg-white text-black h-12 items-center">
        <div>logo</div>
        <Link href="/gallery">
          <h1>Gallery</h1>
        </Link>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
