'use client';

import Input from '@/components/client/Input';
import { AiOutlinePlus } from 'react-icons/ai';

import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import Card from '@/app/ui/card';
import Button from '@/components/client/Button';

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
    <section className="section flex-col gap-6">
      <Card>
        <div className=" relative flex justify-center items-center h-full">
          {image ? (
            <Image className="w-20 h-auto" src={image} alt="loadImg" fill />
          ) : (
            <>
              <AiOutlinePlus className="w-12 h-auto text-gray-400" />
              <Input
                className="absolute hover:cursor-copy w-full h-full opacity-0 top-0 left-0"
                type="file"
                id="fileInput"
                onChange={(e) => onChange(e)}
                accept="image/*"
              />
            </>
          )}
        </div>
      </Card>
      <div className="w-full flex gap-4 justify-center">
        <Button className="bg-blue-400">완료</Button>
        <Button>취소</Button>
      </div>
    </section>
  );
}

export default Add;
