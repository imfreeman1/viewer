'use client';

import { ButtonComponentType } from '@/interface/button.interface';
import React from 'react';

function Button({ className, children, onClick, type }: ButtonComponentType) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
