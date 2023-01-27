import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-4 mx-auto my-2 text-center max-w-7xl sm:mt-6 md:mt-20 ">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-400 sm:text-6xl md:text-7xl">
          Honey Dripper Jewelry
        </p>
      </h1>
      <h2 className="max-w-md mx-auto mt-3 text-yellow-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
      Sweet Like Honey
      </h2>
      
    </div>
  );
};

export default Hero;
