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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
            metus aliquam eleifend mi in. Lobortis scelerisque fermentum dui
            faucibus in ornare quam. A diam maecenas sed enim. Varius sit amet
            mattis vulputate enim nulla aliquet porttitor lacus. Volutpat diam
            ut venenatis tellus in metus. Mi in nulla posuere sollicitudin
            aliquam ultrices sagittis orci. Consectetur adipiscing elit
            pellentesque habitant. Ut ornare lectus sit amet est placerat in
            egestas erat. Adipiscing diam donec adipiscing tristique. Neque
            sodales ut etiam sit amet nisl purus in mollis. Vestibulum sed arcu
            non odio euismod lacinia. Nec sagittis aliquam malesuada bibendum
            arcu. Pellentesque massa placerat duis ultricies lacus sed turpis
            tincidunt id. Lectus magna fringilla urna porttitor rhoncus dolor
            purus. Nullam non nisi est sit amet facilisis magna etiam. Nulla
            facilisi morbi tempus iaculis urna. Eleifend quam adipiscing vitae
            proin sagittis nisl rhoncus.
          </p>
          <p
            className={`mb-5 transition-transform duration-700 delay-200 transform-gpu ${
              inView ? "translate-y-0" : "translate-y-96"
            }`}
          >
            Enim neque volutpat ac tincidunt vitae semper quis lectus nulla.
            Lacus sed turpis tincidunt id aliquet risus. Lorem dolor sed viverra
            ipsum nunc. Volutpat odio facilisis mauris sit amet massa. Amet
            mattis vulputate enim nulla aliquet porttitor lacus luctus. Pharetra
            diam sit amet nisl suscipit adipiscing bibendum est. Velit egestas
            dui id ornare. Dignissim enim sit amet venenatis urna cursus eget
            nunc scelerisque. Sed tempus urna et pharetra pharetra massa massa.
            Cras adipiscing enim eu turpis egestas pretium aenean. Nibh
            venenatis cras sed felis. Neque sodales ut etiam sit amet. Ornare
            arcu odio ut sem nulla pharetra diam sit. Faucibus turpis in eu mi
            bibendum neque egestas. Quam lacus suspendisse faucibus interdum. Eu
            non diam phasellus vestibulum. Libero nunc consequat interdum
            varius.
          </p>
          <p
            className={`mb-5 transition-transform duration-700 delay-200 transform-gpu ${
              inView ? "translate-y-0" : "translate-y-96"
            }`}
          >
            Facilisi etiam dignissim diam quis enim. Ultricies lacus sed turpis
            tincidunt id aliquet risus feugiat. Laoreet suspendisse interdum
            consectetur libero. Ipsum dolor sit amet consectetur adipiscing elit
            ut aliquam. Venenatis lectus magna fringilla urna porttitor rhoncus
            dolor purus non. Condimentum mattis pellentesque id nibh. Neque
            sodales ut etiam sit. Euismod quis viverra nibh cras pulvinar
            mattis. Ut sem nulla pharetra diam sit. Pretium vulputate sapien nec
            sagittis aliquam malesuada bibendum arcu vitae. Et ultrices neque
            ornare aenean euismod elementum. Amet est placerat in egestas.
            Imperdiet massa tincidunt nunc pulvinar sapien et ligula
            ullamcorper. Viverra nibh cras pulvinar mattis.
          </p>
          <p
            className={`mb-5 transition-transform duration-700 delay-200 transform-gpu ${
              inView ? "translate-y-0" : "translate-y-96"
            }`}
          >
            Lorem sed risus ultricies tristique nulla aliquet. Facilisis leo vel
            fringilla est. Neque vitae tempus quam pellentesque nec nam aliquam
            sem. Faucibus in ornare quam viverra orci sagittis eu. Risus pretium
            quam vulputate dignissim suspendisse in est ante in. Fermentum leo
            vel orci porta non pulvinar neque. Faucibus pulvinar elementum
            integer enim neque volutpat. Aliquam ultrices sagittis orci a
            scelerisque purus semper eget. Aliquet risus feugiat in ante metus
            dictum at. Maecenas sed enim ut sem viverra aliquet eget sit amet.
          </p>
          <p
            className={`mb-5 transition-transform duration-700 delay-200 transform-gpu ${
              inView ? "translate-y-0" : "translate-y-96"
            }`}
          >
            Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus.
            Ullamcorper a lacus vestibulum sed arcu non odio euismod. Pretium
            quam vulputate dignissim suspendisse in. Mauris nunc congue nisi
            vitae suscipit tellus mauris a diam. Vulputate sapien nec sagittis
            aliquam malesuada bibendum. Pulvinar neque laoreet suspendisse
            interdum consectetur. Quis commodo odio aenean sed adipiscing. Fames
            ac turpis egestas maecenas pharetra convallis posuere morbi.
            Facilisis volutpat est velit egestas. Semper viverra nam libero
            justo laoreet. Eget nulla facilisi etiam dignissim diam quis enim
            lobortis. At varius vel pharetra vel turpis nunc eget lorem. Tellus
            molestie nunc non blandit massa.
          </p>
        </div>
      </section>
    </>
  );
};

export default DisclaimerPage;
