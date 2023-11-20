'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Button from '../Button';
import BuggerMenu from '../Menu';

const testArr = ['/ About', '/ From', '어쩌구', '저쩌구'];

function Navbar() {
  const [menuViewer, setMenuViewer] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const viewerHandler = () => {
    setMenuViewer((s) => !s);
  };
  const outsideClickHandler = ({ target }: MouseEvent) => {
    if (!menuRef.current?.contains(target as Node)) setMenuViewer(false);
  };

  useEffect(() => {
    if (menuViewer) {
      document.addEventListener('mousedown', outsideClickHandler);
    }

    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  }, [menuViewer]);

  return (
    <div>
      <ul className="md:flex gap-2 hidden ">
        {testArr.map((navItem) => {
          return <li key={navItem}>{navItem}</li>;
        })}
      </ul>
      <div className="w-4">
        <Button className="md:hidden" onClick={viewerHandler}>
          {menuViewer ? <AiOutlineClose /> : <AiOutlineMenu />}
        </Button>
        <BuggerMenu viewControl={menuViewer} menuRef={menuRef} />
      </div>
    </div>
  );
}

export default Navbar;
