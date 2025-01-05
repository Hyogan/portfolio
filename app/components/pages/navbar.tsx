'use client'
import React, { useState } from 'react'
import Link from 'next/link';
const Navbar = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const handleToggleSidebar = () =>{
    setIsSidebarOpened(!isSidebarOpened);
  }
  return (
    <>
    {/* fixed right-10 top-10 sm:top-8 md:top-4  */}
      <nav className='font-prompt flex w-full justify-between px-8 flex-row md:px-12 py-8 items-center'>
        <h4 className='text-lg md:text-2xl text-white capitalize'>
          <a href="">
            <span className='text-initial'>&lt;</span>
            <span className='mx-2'>nelson tiagho</span>
            <span className='text-initial'>/&gt;</span>
          </a>
        </h4>
        <button
          onClick={handleToggleSidebar}
          className={` ${isSidebarOpened ? 'open' : ''} hamburger menu-btn-side`}
          id="menu-btn-side"
          >
            <span className="hamburger-top bg-initial"></span>
            <span className="hamburger-middle bg-initial"></span>
            <span className="hamburger-bottom"></span>
        </button>
      </nav>
      <header 
    className={` ${isSidebarOpened ? 
        'scale-1 opacity-100 rotate-0 ' : 
        'scale-0 opacity-0 -rotate-45 '}
        flex flex-col w-full h-full fixed z-[50] top-0 left-0 bg-darkgray origin-top-right max-w[98%]
        transition-[transform,opacity,border-radius] duration-[1000ms,800ms,600ms] ease-in-out`}
>
          <ul className='w-full h-full flex items-center gap-4 flex-col justify-center'>
            <li>
              <Link href="#" className='text-5xl sm:text-7xl md:text-8xl text-white hover:text-initial'>Home</Link>
            </li>
            <li>
              <Link href="#" className='text-5xl sm:text-7xl md:text-8xl text-white hover:text-initial'>services</Link>
            </li>
            <li>
              <Link href="#" className='text-5xl sm:text-7xl md:text-8xl text-white hover:text-initial'>About</Link>
            </li>
            <li>
              <Link href="#" className='text-5xl sm:text-7xl md:text-8xl text-white hover:text-initial'>work</Link>
            </li>
          </ul>
      </header>
    </>
  )
}

export default Navbar