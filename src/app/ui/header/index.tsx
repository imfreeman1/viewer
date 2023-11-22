import Navbar from '@/components/Navbar';
import React from 'react';

function Header() {
  return (
    <div className="sticky flex justify-between px-4 bg-white text-black h-12 items-center">
      <div>logo</div>
      <h1>Gallery</h1>
      <Navbar />
    </div>
  );
}

export default Header;
