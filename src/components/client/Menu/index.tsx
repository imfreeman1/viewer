'use client';

import { MenuComponentType } from '@/interface/menu.interface';
import React from 'react';
import Button from '../Button';

const testArr = ['사진 추가', '사진 삭제', '메뉴 3'];

// 메뉴바가 나타날 때 애니메이션을 넣고 싶음.

function BuggerMenu({ view, menuRef }: MenuComponentType) {
  return (
    <div
      ref={menuRef}
      className={`absolute top-12 right-0 ${
        view ? null : 'hidden'
      } bg-white bg-opacity-60 rounded-bl-md`}
    >
      <ul className="flex flex-col last:rounded-bl-md w-16 items-center">
        {testArr.map((menu) => {
          return (
            <li key={menu}>
              <Button>{menu}</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BuggerMenu;
