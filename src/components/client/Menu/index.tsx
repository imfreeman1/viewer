'use client';

import { MenuComponentType } from '@/interface/menu.interface';
import React from 'react';
import Menuitem from '../Menuitem';

const testArr = ['add', 'delete'];

// 메뉴바가 나타날 때 애니메이션을 넣고 싶음.

function BuggerMenu({ view, menuRef }: MenuComponentType) {
  return (
    <div
      ref={menuRef}
      className={`absolute top-12 right-0 ${
        view ? null : 'hidden'
      } bg-white h-auto bg-opacity-60 rounded-bl-md`}
    >
      <ul className="flex flex-col last:rounded-bl-md w-20 items-center">
        {testArr.map((menu) => {
          return (
            <li key={menu}>
              <Menuitem menu={menu} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BuggerMenu;
