import React from 'react'
import AnimatedWave from '../animatedwave '

const Hero = () => {
  const linksClass = `text-center mt-4 rounded-full px-8 py-4 pt-2  border-terciary capitalize  text-white bg-transparent hover:bg-white hover:text-primary hover:border-none transition duration-700`
  return (
    <section className="relative w-full h-screen">
    {/* Background */}
   <div className="absolute -top-40 left-0 w-full h-full">
    <AnimatedWave />
   </div>

    {/* Hero Content */}
    <div className="relative z-10 h-full w-full flex items-center justify-center flex-col">
        <p className="text-initial tracking-spaced_max font-bold mb-4  mt-32 text-center">
            SOFTWARE ENGINEER
        </p>
        <h1 className='text-5xl md:text-7xl uppercase text-white font-bold  text-center'>
          Nelson tiagho
          <span className='ml-1 border-l-4 border-initial animate-ping'></span>
        </h1>
        <p className="text-terciary mt-2 text-center text-lg md:text-2xl">
            Web and Mobile Developer | Crafting Digital Experiences
        </p>
        <button className="flex items-center justify-center text-center mt-4 rounded-full px-8 py-4 border-2 border-terciary  text-white bg-transparent hover:bg-white hover:text-primary hover:border-none transition duration-700">
          Discover
        </button>
        <div className="flex w-full items-center justify-center buttons mt-4 gap-2 max-w-xl overflow-auto pb-4">
          <a href="#" className={`${linksClass}`}>Home</a>
          <a href="#" className={`${linksClass}`}>about</a>
          <a href="#" className={`${linksClass} border-b-4 border-initial` }>skills</a>
          <a href="#" className={`${linksClass}`}>work</a>
          <a href="#" className={`${linksClass}`}>contact</a>
        </div>
    </div>
</section>
  )
}

export default Hero