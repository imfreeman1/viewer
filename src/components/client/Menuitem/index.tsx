'use client';

import React from 'react';
import Link from 'next/link';

function Menuitem({ menu, address }: { menu: string; address: string }) {
  return (
    <div>
      <Link href={address}>{menu}</Link>
    </div>
  );
}

export default Menuitem;
