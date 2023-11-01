"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const DisclaimerPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <>
      <div
        className='hero pt-20'
        style={{
          backgroundImage: "url(/disclaimers-header.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='hero-content text-center text-neutral-content py-20'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl text-white font-bold'>Disclaimer</h1>
          </div>
        </div>
      </div>
      <section ref={ref} className='bg-brand-royal-blue'>
        <div className='container px-5 mx-auto py-20 sm:py-40 max-w-xl text-justify'>
          <p
            className={`mb-5 transition-transform duration-700 transform-gpu ${
              inView ? "translate-y-0" : "translate-y-96"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            numquam architecto id facere quia beatae rem nesciunt quisquam
            laudantium explicabo consequatur ex cupiditate, accusantium impedit
            repudiandae recusandae saepe blanditiis, quibusdam at ullam! Autem,
            rem fugit? Dolorum velit eaque, consequuntur ad natus iure dolor ab
            corporis explicabo, eius praesentium! Exercitationem corrupti
            quibusdam doloremque sed sint quod repellat dignissimos iusto
            debitis culpa distinctio voluptate facere, quo laborum.
          </p>
          <p
            className={`mb-5 transition-transform duration-700 delay-200 transform-gpu ${
              inView ? "translate-y-0" : "translate-y-96"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            numquam architecto id facere quia beatae rem nesciunt quisquam
            laudantium explicabo consequatur ex cupiditate, accusantium impedit
            repudiandae recusandae saepe blanditiis, quibusdam at ullam! Autem,
            rem fugit? Dolorum velit eaque, consequuntur ad natus iure dolor ab
            corporis explicabo, eius praesentium! Exercitationem corrupti
            quibusdam doloremque sed sint quod repellat dignissimos iusto
            debitis culpa distinctio voluptate facere, quo laborum.
          </p>
        </div>
      </section>
    </>
  );
};

export default DisclaimerPage;
