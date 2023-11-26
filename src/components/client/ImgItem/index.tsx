'use client';

import Image from 'next/image';
import React from 'react';

function ImgItem({ src }: { src: string }) {
  return (
    <div className="h-20 w-20 sm:h-36 sm:w-36">
      <Image alt="사진" src={src} width={80} height={80} />
    </div>
  );
}

export default ImgItem;
