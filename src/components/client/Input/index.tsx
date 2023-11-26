import { InputComponentType } from '@/interface/input.interface';
import React from 'react';

function Input({ onChange, type }: InputComponentType) {
  return <input onChange={onChange} type={type} />;
}

export default Input;
