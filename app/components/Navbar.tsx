import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
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
      <div className='flex-none uppercase'>
        <ul className='menu menu-horizontal px-1'>
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
  );
};

export default Navbar;
