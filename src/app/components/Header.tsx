'use client';

import React, { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && 'bg-black'}
      fixed top-0 z-50 flex w-full items-center justify-between transition-all px-4 py-4 lg:px-10 lg:py-6`}>

      <div className='flex items-center space-x-2 md:space-x-8'>
        <img src='https://rb.gy/ulxxee' alt='netflix-logo' width={120} height={120} />
        <ul className='hidden md:flex md:space-x-4'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movie</li>
          <li>Latest</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>
          Kids
        </p>

        <img src='https://rb.gy/g1pwyx'
             alt='profile'
             className='cursor-pointer rounded'/>

      </div>

    </header>
  )
}