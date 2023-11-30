import React from 'react';

function Card({ children }: { children: React.ReactChild }) {
  return (
    <div className="rounded-md shadow-sm shadow-gray-200 border border-gray-300 w-full bg-white h-40 p-4">
      {children}
    </div>
  );
}

export default Card;
