import { InputComponentType } from '@/interface/input.interface';
import React from 'react';

function Input({ className, onChange, type }: InputComponentType) {
  return <input className={className} onChange={onChange} type={type} />;
}

export default Input;
