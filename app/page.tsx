import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className='hero relative h-screen overflow-hidden'>
        <video
          src='/rgc-header-video.mp4'
          autoPlay={true}
          loop
          muted
          className='absolute -z-10 inset-x-0'
        ></video>
        <div className='hero-overlay bg-brand-royal-blue bg-opacity-60'></div>
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
      <div className='flex h-full flex-row relative -top-16'>
        <div className='grid flex-grow h-32 place-items-center'></div>
        <div className='divider divider-horizontal before:bg-opacity-100 after:bg-opacity-100'></div>
        <div className='grid flex-grow h-32 place-items-center'></div>
      </div>
      <div id='strategy' className='hero relative py-40 -mt-32 overflow-hidden'>
        {/* <div className='hero-overlay bg-brand-royal-blue bg-opacity-80'></div> */}
        <div className='max-w-[30rem] mx-auto text-center text-white'>
          <h3 className='text-3xl mb-10 text-brand-primary'>Strategy</h3>
          <p className='mb-5'>
            We pursue a fundamental equity market-neutral strategy, delivering
            high and consistent idiosyncratic returns.
          </p>
          <p className='mb-5'>
            By harnessing human fundamental insight, large data and AI machine
            learning techniques, we have developed a process that has proven and
            uncorrelated returns.
          </p>
        </div>
      </div>
      <div className='flex h-full flex-row relative -top-16'>
        <div className='grid flex-grow h-32 place-items-center'></div>
        <div className='divider divider-horizontal before:bg-opacity-100 after:bg-opacity-100'></div>
        <div className='grid flex-grow h-32 place-items-center'></div>
      </div>
      <div
        id='contact'
        className='bg-brand-royal-blue text-center py-40 -mt-32'
      >
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
    </main>
  );
}
