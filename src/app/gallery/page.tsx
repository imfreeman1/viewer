'use client';

import { v4 as uuidv4 } from 'uuid';
import ImgItem from '@/components/client/ImgItem';
import React from 'react';
import { useAppSelector } from '../hooks/reduxHooks';

function Gallery() {
  const imgArr = useAppSelector((state) => state.galleryReducer);

  return (
    <section className="p-6 min-h-full max-h-screen flex justify-center overflow-scroll">
      <div className="w-fit h-auto grid grid-cols-3 grid-flow-row justify-items-center gap-4 sm:grid-cols-4">
        {imgArr.map((img) => {
          return <ImgItem key={uuidv4()} src={img} />;
        })}
      </div>
    </section>
  );
}

export default Gallery;
