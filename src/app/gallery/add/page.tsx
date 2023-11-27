'use client';

import Input from '@/components/client/Input';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';

// const imageLoader = ({src,width,})

function Add() {
  const [image, setImage] = useState<string | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const file = files![0];
    const reader = new FileReader();

    reader.onloadend = (loadendEvent: ProgressEvent<FileReader>) => {
      const currenTarget = loadendEvent.currentTarget as FileReader;
      const result = currenTarget.result as string;
      setImage(result);
    };
    reader.readAsDataURL(file);
    // const url = URL.createObjectURL(file);
    // setImage(url);
  };
  return (
    <section className="section">
      <div>
        {image ? (
          <div>
            <Image
              className="w-20 h-auto"
              src={image}
              alt="loadImg"
              width={100}
              height={100}
            />
          </div>
        ) : (
          <Input
            className="oparcity-0"
            type="file"
            onChange={(e) => onChange(e)}
            accept="image/*"
          />
        )}
      </div>
    </section>
  );
}

export default Add;
