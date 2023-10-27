import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className='hero relative h-screen overflow-hidden'>
      <video
        src='/rgc-header-video.mp4'
        autoPlay={true}
        loop
        muted
        className='absolute -z-10 inset-x-0 max-w-none xl:max-w-full 2xl:w-full h-full xl:h-auto'
      ></video>
      <Image
        className={`relative opacity-70 top-[100vh] ${styles.crown}`}
        src='/rgc-crown.svg'
        alt='Regent Gate Capital Crown'
        width={550}
        height={482}
        priority
      />
      {/* <div className='hero-overlay bg-brand-royal-blue bg-opacity-60'></div> */}
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <Image
            className='relative'
            src='/rgc-icon.svg'
            alt='Regent Gate Capital Logo'
            width={500}
            height={72}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
