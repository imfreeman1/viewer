'use client';

import Image, { ImageLoader } from 'next/image';
import React from 'react';

const imgLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}q=${quality}`;
};

function ImgItem({ src }: { src: string }) {
  return (
    <div className="h-20 w-20 sm:h-36 sm:w-36 block">
      <Image
        loader={imgLoader}
        alt="사진"
        src={src}
        width={80}
        height={80}
        quality={80}
      />
    </div>
  );
}

export default ImgItem;
