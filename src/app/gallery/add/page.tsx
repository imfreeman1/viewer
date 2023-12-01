'use client';

import Input from '@/components/client/Input';
import { AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';
import React from 'react';
import Card from '@/app/ui/card';
import Button from '@/components/client/Button';
import useImage from '@/hooks/useImage';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { addImg } from '@/redux/gallery/action';
import { useRouter } from 'next/navigation';

function Add() {
  const [image, imageChangeHandler, cancelHandler] = useImage();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const completeHandler = () => {
    dispatch(addImg(image as string));
    router.push('/gallery');
  };
  return (
    <section className="section flex-col gap-6">
      <Card>
        <div className=" flex justify-center items-center h-full relative z-0">
          {image ? (
            <Image
              className="w-full h-full"
              src={image}
              alt="loadImg"
              width={700}
              height={500}
              sizes="100vw"
            />
          ) : (
            <>
              <AiOutlinePlus className="w-12 h-auto text-gray-400" />
              <Input
                className="absolute hover:cursor-copy w-full h-full opacity-0 top-0 left-0"
                type="file"
                onChange={(e) => imageChangeHandler(e)}
                accept="image/*"
              />
            </>
          )}
        </div>
      </Card>
      <div className="w-full flex gap-4 justify-center">
        <Button
          className="bg-blue-500 hover:bg-blue-400 base-btn"
          onClick={completeHandler}
        >
          완료
        </Button>
        <Button
          className="bg-gray-400 hover:bg-gray-300 base-btn"
          onClick={cancelHandler}
        >
          취소
        </Button>
      </div>
    </section>
  );
}

export default Add;
