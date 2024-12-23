import React from 'react'

const DottedGrid = () => {
    const totalDots = 64;
  return (
    <div className="grid grid-cols-8 gap-1 w-40 h-40  place-items-center">
        {Array.from({ length: totalDots }, (_, index) => (
        <div
            key={index}
            className="w-1 h-1 bg-terciary rounded-full"
        ></div>
        ))}
    </div>
    );
}

export default DottedGrid