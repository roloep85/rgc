"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";

const Navbar = () => {
  const handleMenuClick = (event: MouseEvent) => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu?.classList.contains("hidden")) {
      mobileMenu?.classList.remove("hidden");
      mobileMenu?.classList.add("block");
    } else {
      mobileMenu?.classList.add("hidden");
      mobileMenu?.classList.remove("block");
    }
  };
  return (
    <>
      <div className='navbar absolute z-10 inset-x-0 container px-2 sm:px-20 mx-auto'>
        <div className='flex-1'>
          <Link
            href={"/"}
            className='btn btn-ghost normal-case text-xl hover:bg-transparent'
          >
            <Image
              src='/rgc-icon.svg'
              alt='Regent Gate Capital Logo'
              width={180}
              height={26}
              priority
            />
          </Link>
        </div>
        <div className='flex-none'>
          <button
            onClick={handleMenuClick}
            className='btn btn-square btn-ghost xl:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-5 h-5 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
          <ul className='menu menu-horizontal px-1 hidden xl:inline-flex'>
            <li className='text-xs text-white'>
              <a href='/#strategy' className='hover:bg-transparent'>
                Strategy
              </a>
            </li>
            <li className='text-xs text-white'>
              <a href='/#contact' className='hover:bg-transparent'>
                Contact
              </a>
            </li>
            <li className='text-xs text-white'>
              <Link href={"/disclaimer"} className='hover:bg-transparent'>
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        id='mobileMenu'
        onClick={handleMenuClick}
        className='absolute z-10 hidden pt-20 inset-0 bg-brand-royal-blue top-16'
      >
        <div className='container px-2 sm:px-20 mx-auto'>
          <ul className='px-5'>
            <li className='text-xs py-5 text-white text-center'>
              <a href='/#strategy' className='hover:bg-transparent'>
                Strategy
              </a>
            </li>
            <li className='text-xs py-5 text-white text-center'>
              <a href='/#contact' className='hover:bg-transparent'>
                Contact
              </a>
            </li>
            <li className='text-xs py-5 text-white text-center'>
              <Link href={"/disclaimer"} className='hover:bg-transparent'>
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
