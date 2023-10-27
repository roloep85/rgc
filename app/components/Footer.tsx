import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className='bg-white text-brand-royal-blue'>
      <div className='flex flex-col sm:flex-row items-center gap-2 justify-between container px-2 sm:px-20 mx-auto py-6 '>
        <small>© 2023 Regents Gate Capital - All right reserved</small>
        <Link href={"/"}>
          <Image
            src='/rgc-crown.svg'
            alt='Regent Gate Capital Logo'
            width={30}
            height={20}
            priority
          />
        </Link>
        <small className='grid grid-flow-col gap-2'>
          <Link href={"/disclaimer"}>Disclaimer & Privacy Policy</Link>
          <span>|</span>
          <a className='link link-hover'>Disclosures</a>
        </small>
      </div>
    </footer>
  );
};
