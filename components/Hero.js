import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-4 pb-8 mx-auto my-2 text-center max-w-7xl sm:mt-6 md:mt-20">
      <h1 className="font-extrabold">
        <p className="h-full py-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-400 sm:text-6xl md:text-7xl">
          Honey Dripper Jewelry
        </p>
      </h1>
      <h2 className="max-w-md mx-auto my-4 mt-3 font-semibold text-green-700 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl text-9xl">
      Sweet Like Honey
      </h2>
    </div>
  );
};

export default Hero;
