import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Button from '../Button';

const testArr = ['/ About', '/ From', '어쩌구', '저쩌구'];

function Navbar() {
  return (
    <div>
      <ul className="md:flex gap-2 hidden ">
        {testArr.map((navItem) => {
          return <li key={navItem}>{navItem}</li>;
        })}
      </ul>
      <Button className="md:hidden">
        <AiOutlineMenu />
      </Button>
    </div>
  );
}

export default Navbar;
