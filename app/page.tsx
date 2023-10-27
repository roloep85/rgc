"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <main>
      <Hero />
      <div className='flex h-full flex-row relative -top-16'>
        <div className='grid flex-grow h-32 place-items-center'></div>
        <div className='divider divider-horizontal before:bg-opacity-100 after:bg-opacity-100'></div>
        <div className='grid flex-grow h-32 place-items-center'></div>
      </div>
      <section
        id='strategy'
        ref={ref}
        className='hero relative -z-10 py-40 -mt-32 overflow-hidden bg-strategy-section'
      >
        {/* <div className='hero-overlay bg-brand-royal-blue bg-opacity-80'></div> */}
        <div className='container px-5 max-w-[30rem] mx-auto text-center text-white'>
          <h3
            className={`text-3xl mb-10 text-brand-primary transition-transform duration-700 transform-gpu ${
              inView ? "translate-y-0" : "translate-y-96"
            }`}
          >
            Strategy
          </h3>
          <p
            className={`mb-5 transition-transform duration-700 delay-200 transform-gpu ${
              inView ? "translate-y-0" : "translate-y-96"
            }`}
          >
            We pursue a fundamental equity market-neutral strategy, delivering
            high and consistent idiosyncratic returns.
          </p>
          <p
            className={`mb-5 transition-transform duration-700 delay-500 transform-gpu ${
              inView ? "translate-y-0" : "translate-y-96"
            }`}
          >
            By harnessing human fundamental insight, large data and AI machine
            learning techniques, we have developed a process that has proven and
            uncorrelated returns.
          </p>
        </div>
      </section>
      <div className='flex h-full flex-row relative -top-16'>
        <div className='grid flex-grow h-32 place-items-center'></div>
        <div className='divider divider-horizontal before:bg-opacity-100 after:bg-opacity-100'></div>
        <div className='grid flex-grow h-32 place-items-center'></div>
      </div>
      <section id='contact' className='bg-brand-royal-blue text-center -mt-32'>
        <div className='container px-5 mx-auto py-20 sm:py-40'>
          <h3 className='text-3xl mb-10 text-brand-primary'>Get in touch</h3>
          <small className='text-white block mb-10'>
            <a href='mailto:info@regentsgatecapital.com'>
              info@regentsgatecapital.com
            </a>
          </small>
          <Image
            className='inline'
            src='/linkedin.svg'
            alt='LinkedIn Logo'
            width={20}
            height={20}
            priority
          />
        </div>
      </section>
    </main>
  );
}
