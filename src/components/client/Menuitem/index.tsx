'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Menuitem({ menu }: { menu: string }) {
  const pathname = usePathname();

  return (
    <div>
      <Link href={`${pathname}/${menu}`}>{menu}</Link>
    </div>
  );
}

export default Menuitem;
