'use client';

import Input from '@/components/client/Input';
import React, { ChangeEvent } from 'react';

function Add() {
  // const [image, setImage] = useState(null);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // const reader = new FileReader();
    // reader.onload = (e) => {};
  };
  return (
    <section className="section">
      <div>
        <Input
          className="oparcity-0"
          type="file"
          onChange={(e) => onChange(e)}
          accept="image/*"
        />
      </div>
    </section>
  );
}

export default Add;
