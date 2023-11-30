'use client';

import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import useMenuHandler from '@/hooks/useMenuHandler';
import useNavigate from '@/hooks/useNavigate';
import BuggerMenu from '../Menu';
import Button from '../Button';

const testArr = ['/ About', '/ From', '어쩌구', '저쩌구'];

function Navbar() {
  const [view, setOnMenu, menuRef] = useMenuHandler();
  const [navView] = useNavigate();

  return (
    <div>
      <ul className="md:flex gap-2 hidden ">
        {testArr.map((navItem) => {
          return <li key={navItem}>{navItem}</li>;
        })}
      </ul>
      {navView ? (
        <div className="w-4">
          <Button className="md:hidden" onClick={setOnMenu}>
            {view ? <AiOutlineClose /> : <AiOutlineMenu />}
          </Button>
          <BuggerMenu view={view} menuRef={menuRef} />
        </div>
      ) : (
        <Button>로그인</Button>
      )}
    </div>
  );
}

export default Navbar;
