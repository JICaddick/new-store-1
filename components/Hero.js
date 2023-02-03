import Image from "next/image";
import useDimensions from 'react-cool-dimensions';
import arrayCeil from '../lib/arrayCeil';
import React, { useState } from 'react'

const Hero = () => {

  const [heroImage, setHeroImage] = useState()
  const imageSizes = [600, 1280, 1920]  
  
  const { observe } = useDimensions({
    onResize: ({ observe, unobserve, width, height }) => {
      setHeroImage(`hero-${arrayCeil(imageSizes, width, height)}.jpg`)

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  return (
    <div ref={observe} className="relative items-center justify-center pt-16 mx-auto text-center bg-center bg-no-repeat bg-cover ">
      <Image
        src={'/comb.jpg'}
        alt="Hero Image"
        className="object-cover"
        layout="fill"
      />
      <div className="relative content-end">
        <h1 className="font-extrabold ">
          <p className="object-cover py-4 mt-24 text-amber-700 text-7xl bg-gradient-to-r sm:text-6xl md:text-7xl lg:text-8xl lg:pt-10 text-fill-cyan-500 text-stroke-4 text-stroke-black">
            Honey Dripper Jewelry
          </p>
        </h1>
        <h2 className="max-w-md mx-auto my-2 font-semibold pb-28 text-sky-200 drop-shadow-2xl shadow-green-700 sm:text-5xl md:mt-5 md:text-6xl text-fill-cyan-500 text-stroke-2 text-stroke-black">
        Sweet Like Honey
        </h2>
      </div>
    </div>
  );
};

export default Hero;
