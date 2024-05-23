'use client'

import Link from 'next/link';
import { useContext } from 'react';
import { NavbarContext } from './contexts/navBarContext';

export default function Home() {

  const { navbarSelection, setNavbarSelection } = useContext(NavbarContext)

  const handleNavClick = (path) => {
    setNavbarSelection(path)
  }

  return (
    <div className='flex justify-center min-h-[52vh]'>
      <div className='grid grid-cols-3 gap-1'>
        <div className='col-span-3 text-center'>
          <p className='text-[15vh] font-poiret text-customDBrown mt-40 mb-10 ' >J Vance</p>
          <p className='text-[2vh] font-armata text-customBrown'>Full-Stack Software Engineer</p>
          <hr className='border-customDSage w-100 my-2' />
          <p className='text-[2vh] font-armata text-customBrown'>Professional Actor</p>
        </div>
        <div className='col-span-1 text-center font-armata text-customBrown text-[1.75vh] mt-[10vh]'>
            <Link href='/development' onClick={() => handleNavClick('Development')}>
              <span className='animate-lightGlowSage animate-pulse'>Development</span>
            </Link>
        </div>
        <div className='col-span-1 mt-10' />
        <div className='col-span-1 text-center font-armata text-customBrown text-[1.75vh] mt-[10vh]'>
            <Link href='/performance' onClick={() => handleNavClick('Performance')}>
              <span className='animate-lightGlowSage animate-pulse'>Performance</span>
            </Link>
        </div>
      </div>
    </div>
  );
}
