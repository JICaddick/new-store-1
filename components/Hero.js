import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-4 mx-auto my-6 text-center max-w-7xl sm:mt-6 md:mt-20 ">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl text-orange-400 sm:text-3xl md:text-4xl">
          <Image src="/JoBox Tool Co-logos_transparent.png" alt="JoBox Tool Company Logo" height="400" width="400" />
        </p>
        <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-700 to-orange-400 sm:text-6xl md:text-7xl">
          Tools For Every Potato
        </p>
      </h1>
      <div className="flex items-center justify-center max-w-md mx-auto mt-5 md:mt-8">
        <Link href="#">
          <a className="inline-flex items-center justify-center h-12 px-6 py-3 mr-6 font-medium text-white bg-gray-900 border-transparent rounded-md hover:bg-orange-400">
            Tool Up Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
