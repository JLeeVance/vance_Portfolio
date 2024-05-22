'use client'

import Link from "next/link";
import { useContext } from "react";
import { NavbarContext } from "./contexts/navBarContext";

export default function Home() {

  const { navbarSelection, setNavbarSelection } = useContext(NavbarContext)

  const handleNavClick = (path) => {
    setNavbarSelection(path)
  }

  return (
    <div className='flex justify-center min-h-[52vh]'>
      <div className='grid grid-cols-3 gap-1'>
        <div className='col-span-3 text-center'>
          <p className='text-9xl font-poiret text-customDBrown mt-40 mb-10 ' >J Vance</p>
          <p className='font-armata text-md text-customBrown'>Full-Stack Software Engineer</p>
          <hr className='border-customDSage w-100 my-2' />
          <p className='font-armata text-md text-customBrown'>Professional Actor</p>
        </div>
        <div className="col-span-1 text-center font-armata text-customBrown">
            <Link href='/development' className='animate-wiggle' onClick={() => handleNavClick('Development')}>
              <p className='animate-wiggle'>Development</p>
            </Link>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1 text-center font-armata text-customBrown">
            <Link href='/performance' className='animate-wiggle' onClick={() => handleNavClick('Performance')}>
              <p className='animate-wiggle'>Performance</p>
            </Link>
        </div>
      </div>
    </div>
  );
}
