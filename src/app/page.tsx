'use client';

import React from 'react';

const divArrMaker = (num: number) => {
  const result: React.ReactElement[] = [];
  for (let i = 1; i <= num; i += 1) {
    const tmp = (
      <div className="h-20 w-20 sm:h-36 sm:w-36 bg-purple-300 text-center">
        img{i}
      </div>
    );
    result.push(tmp);
  }
  return result;
};

const testArr = divArrMaker(10);

export default function Home() {
  return (
    <section className="p-6 min-h-full max-h-screen flex justify-center">
      <div className="w-fit h-auto grid grid-cols-3 grid-flow-row justify-items-center gap-4 sm:grid-cols-4">
        {testArr.map((img) => {
          return img;
        })}
      </div>
    </section>
  );
}
