import Navbar from '@/components/Navbar';
import React from 'react';

function Header() {
  return (
    <div className="flex justify-between mx-4">
      <div>logo</div>
      <div>홈페이지 이름</div>
      <Navbar />
    </div>
  );
}

export default Header;
