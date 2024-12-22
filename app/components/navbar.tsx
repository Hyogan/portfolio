'use client'
import React, { useState } from 'react'
import Link from 'next/link';
const Navbar = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(true);

  const handleToggleSidebar = () =>{
    setIsSidebarOpened(!isSidebarOpened);
  }
  return (
    <>
    {/* fixed right-10 top-10 sm:top-8 md:top-4  */}
      <nav className='w-full justify-between px-12 py-8 items-center flex'>
        <h4 className='text-2xl capitalize'>nelson tiagho</h4>
        <button
          onClick={handleToggleSidebar}
          className={` ${isSidebarOpened ? 'open' : ''} hamburger menu-btn-side`}
          id="menu-btn-side"
          >
            <span className="hamburger-top bg-primary"></span>
            <span className="hamburger-middle bg-primary"></span>
            <span className="hamburger-bottom"></span>
        </button>
      </nav>
      <header 
          className={` ${isSidebarOpened ? 'translate-x-0' : 'translate-x-full'}
                    flex flex-col w-full h-full fixed  z-[50] top-0 left-0 bg-darkgray transition duration-1000`}
      >
          <ul className='w-full h-full flex items-center gap-4 flex-col justify-center'>
            <li>
              <Link href="#" className='text-6xl text-white hover:text-primary'>Home</Link>
            </li>
            <li>
              <Link href="#" className='text-6xl text-white hover:text-primary'>My services</Link>
            </li>
            <li>
              <Link href="#" className='text-6xl text-white hover:text-primary'>About me</Link>
            </li>
            <li>
              <Link href="#" className='text-6xl text-white hover:text-primary'>My work</Link>
            </li>
          </ul>
      </header>
    </>
  )
}

export default Navbar