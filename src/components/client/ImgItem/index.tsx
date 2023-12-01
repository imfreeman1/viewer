'use client';

import Image from 'next/image';
import React from 'react';

function ImgItem({ src }: { src: string }) {
  return (
    <div className="image-container">
      <Image
        className="w-full h-full"
        alt="사진"
        src={src}
        width={700}
        height={475}
        sizes="100vw"
        quality={80}
        priority
      />
    </div>
  );
}

export default ImgItem;
