import { MenuComponentType } from '@/interface/menu.interface';
import React from 'react';

const testArr = ['메뉴 1', '메뉴 2', '메뉴 3'];

// 메뉴바가 나타날 때 애니메이션을 넣고 싶음.

function BuggerMenu({ viewControl, menuRef }: MenuComponentType) {
  return (
    <div
      ref={menuRef}
      className={`absolute top-12 right-0 ${
        viewControl ? null : 'hidden'
      } bg-white bg-opacity-60 rounded-bl-md`}
    >
      <ul className="flex flex-col last:rounded-bl-md w-16 items-center">
        {testArr.map((menu) => {
          return <li key={menu}>{menu}</li>;
        })}
      </ul>
    </div>
  );
}

export default BuggerMenu;
