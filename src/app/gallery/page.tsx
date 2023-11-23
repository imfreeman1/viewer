'use client';

import React from 'react';
import { useAppSelector } from '../hooks/reduxHooks';

function Gallery() {
  const imgArr = useAppSelector((state) => state.galleryReducer);

  return (
    <section className="p-6 min-h-full max-h-screen flex justify-center overflow-scroll">
      <div className="w-fit h-auto grid grid-cols-3 grid-flow-row justify-items-center gap-4 sm:grid-cols-4">
        {imgArr.map((img) => {
          return (
            <div
              className="h-20 w-20 sm:h-36 sm:w-36 bg-purple-300 text-center"
              key={img}
            >
              {img}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
