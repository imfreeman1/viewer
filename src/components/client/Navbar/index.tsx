'use client';

import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import useMenuHandler from '@/app/hooks/useMenuHandler';
import BuggerMenu from '../Menu';
import Button from '../Button';

const testArr = ['/ About', '/ From', '어쩌구', '저쩌구'];

function Navbar() {
  const [view, setOnMenu, menuRef] = useMenuHandler();

  return (
    <div>
      <ul className="md:flex gap-2 hidden ">
        {testArr.map((navItem) => {
          return <li key={navItem}>{navItem}</li>;
        })}
      </ul>
      <div className="w-4">
        <Button className="md:hidden" onClick={setOnMenu}>
          {view ? <AiOutlineClose /> : <AiOutlineMenu />}
        </Button>
        <BuggerMenu view={view} menuRef={menuRef} />
      </div>
    </div>
  );
}

export default Navbar;
