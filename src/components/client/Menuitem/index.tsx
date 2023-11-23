'use client';

import React from 'react';
import { useAppDispatch } from '@/app/hooks/reduxHooks';
import { addImg, deleteImg } from '@/redux/gallery/action';
import Button from '../Button';

function Menuitem({ menu }) {
  const dispatch = useAppDispatch();

  const menuHandler = () => {
    if (menu === '사진 추가') dispatch(addImg());
    if (menu === '사진 삭제') dispatch(deleteImg());
  };

  return (
    <div>
      <Button onClick={menuHandler}>{menu}</Button>
    </div>
  );
}

export default Menuitem;
