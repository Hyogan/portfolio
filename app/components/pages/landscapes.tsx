'use client';
import React, { useState } from 'react';
import { Landscape } from '@/app/interfaces/project';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/16/solid';
import Modal from '../utils/modal';
const Landscapes = () => {
  const landscapes: Landscape[] = [
    {
      id: 1,
      title: 'Icelandic Wonders',
      description: 'Immerse yourself in the awe-inspiring beauty of Iceland, a land of extremes where fire and ice coexist. Discover dramatic volcanic landscapes, sprawling glaciers, and powerful waterfalls that thunder into deep canyons. From the serene beauty of the Icelandic plains to the rugged terrain shaped by centuries of natural forces, every corner offers a glimpse into the raw power and majesty of nature. This is a destination where every step feels like entering a new world.',
      picture: 'images/open-landscape.jpg',
    },
    {
      id: 2,
      title: 'Aurora in Maryland',
      description: 'Maryland, a state steeped in history and natural beauty, is where vibrant culture meets tranquil coastlines. Picture a rare and magical night when the aurora borealis lights up the skies above. Known for its charming bays, historic sites, and a unique blend of modernity and tradition, Maryland is a destination that offers something for everyone. From serene waterfronts to bustling urban centers, it’s a place of endless exploration and awe-inspiring moments.',
      picture: 'images/aurore-boreale.jpg',
    },
    {
      id: 3,
      title: 'Emerald Peaks',
      description: 'Lose yourself in the enchanting beauty of the emerald peaks, where towering mountains covered in lush greenery seem to touch the sky. These landscapes are a haven for adventurers and dreamers alike, offering endless trails, hidden waterfalls, and panoramic vistas that take your breath away. The soft mist that often envelops the peaks adds a mystical aura, making this destination feel like a scene straight out of a fantasy novel. Perfect for those seeking solace and connection with nature.',
      picture: 'images/greenish_mountains.jpg',
    },
    {
      id: 4,
      title: 'Riverside Serenity',
      description: 'Experience the tranquil beauty of rivers winding gracefully through valleys nestled between majestic mountain ranges. The soothing sound of water flowing over smooth stones provides the perfect soundtrack to this idyllic setting. Whether you’re sitting by the riverbank, watching the reflections of towering peaks in the crystal-clear water, or exploring the vibrant flora and fauna that thrive in this environment, this scene offers a true escape into nature’s calm embrace.',
      picture: 'images/mountains_river.jpg',
    },
    {
      id: 5,
      title: 'Garden Paradise',
      description: 'Step into a magical garden, a vibrant oasis teeming with life and color. Surrounded by blooming flowers of every hue, lush greenery, and the gentle hum of bees and birds, this garden feels like a piece of heaven on Earth. Wander through winding paths, discover hidden nooks, and let the beauty of nature rejuvenate your spirit. This is a place where time seems to stand still, and every moment is filled with peace and wonder.',
      picture: 'images/wonderful-garden.jpg',
    },
    {
      id: 6,
      title: 'Vast River Escape',
      description: 'Discover the grandeur of a vast river as it meanders through untouched wilderness, carving its way through the landscape with quiet grace. The shimmering waters reflect the surrounding beauty, from towering cliffs to dense forests that line its banks. This serene and expansive view invites you to pause, breathe, and appreciate the unspoiled majesty of nature. Whether you’re floating along its gentle currents or admiring its beauty from afar, this river offers a deep sense of connection and tranquility.',
      picture: 'images/vast-river.jpg',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const truncate = (oldtext: string,maxSize: number = 100, replacement: string = '...') => {
    return oldtext.length > maxSize ? oldtext.substring(0,maxSize) + replacement : oldtext
  }

  const handleSetCurrentLandscape = (action: 'next' | 'prev') => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      const nextIndex = (currentIndex + (action === 'next' ? 1 : -1) + landscapes.length) % landscapes.length;
      setCurrentIndex(nextIndex);
      setIsAnimating(false);
    }, 500); // Match the animation duration
  };

  const currentLandscape = landscapes[currentIndex];

  return (
    <div className="w-full min-h-screen p-20 relative overflow-hidden">
      {/* Main Background with Animation */}
      <div
        className={`absolute inset-0 h-full w-full flex flex-col items-start justify-start transition-opacity duration-500 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url(${currentLandscape.picture})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 flex flex-col items-start h-full w-full pl-1 md:pl-20 justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">{currentLandscape.title}</h1>
          <p className="mt-4 text-xl text-white drop-shadow-md">{truncate(currentLandscape.description,90)}</p>
          <button
            onClick={openModal} 
            className="px-6 py-3 mt-6 text-white rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-blur-lg hover:scale-105 hover:bg-blue-700/20 transition-transform duration-300">
            See more
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      {/* Thumbnails */}
{/* Thumbnails */}
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4 overflow-x-auto px-4">
  {landscapes.map((landscape, index) => (
    <div
      key={landscape.id}
      onClick={() => setCurrentIndex(index)}
      style={{
        backgroundImage: `url(${landscape.picture})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className={`w-[100px] h-[70px] bg-cover rounded-lg cursor-pointer transition-transform duration-500 ${
        isAnimating ? 'scale-90 opacity-50' : 'scale-100 opacity-100'
      } ${
        currentIndex === index ? 'border-4 border-blue-500 scale-110' : 'hover:scale-105'
      }`}
    >
      <span className="hidden">{landscape.title}</span>
    </div>
  ))}
</div>



      {/* Navigation Buttons with Modern Style */}
      <div className="absolute top-4 left-0 right-0 flex justify-between px-10 z-20 md:top-1/4">
        <button
          onClick={() => handleSetCurrentLandscape('prev')}
          className="px-4 py-2 bg-white/30 text-white  rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-white/60 hover:text-purple-600"
        >
          <ArrowLeftIcon className='h-6'></ArrowLeftIcon>
        </button>
        <button
          onClick={() => handleSetCurrentLandscape('next')}
          className="px-4 py-2 bg-white/30 text-white  rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-white/60 hover:text-purple-600"
        >
          <ArrowRightIcon className='h-6'></ArrowRightIcon>
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Information Unavailable</h2>
        <p className="text-gray-200 text-center mb-6">
          The details for this place are not yet available, please come later, or
          <a href="/contact" className="text-blue-400 hover:text-blue-600 mx-1">
            contact us
          </a>
          to provide any relevant information about it.
        </p>
        <div className="flex justify-center">
          <button
            onClick={closeModal}
            className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all ease-in-out duration-300"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Landscapes;
