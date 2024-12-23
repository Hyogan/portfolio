'use client';
import Image from 'next/image';
import React from 'react';

const AnimatedWave = () => {
  return (
    <div className="relative background_circles w-full h-full overflow-hidden">
      {/* Concentric Circles */}
      <div className="absolute w-[160vh] h-[160vh] border-[1px] border-gray-700 rounded-full"></div>
      <div className="absolute w-[130vh] h-[130vh] border-[1px] border-gray-700 rounded-full"></div>
      <div className="absolute w-[100vh] h-[100vh] border-[1px] border-gray-700 rounded-full"></div>
      <div className="absolute w-[70vh] h-[70vh] border-[1px] border-gray-700 rounded-full"></div>

      {/* Profile Picture */}
      <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg z-10">
        <Image
          src="/images/screen_devio.png" // Replace with your profile image path
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default AnimatedWave;
