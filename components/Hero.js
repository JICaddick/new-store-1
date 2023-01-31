import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="items-center justify-center pt-16 mx-auto text-center bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/bright-drip-across.png')" }}>
      <h1 className="font-extrabold">
        <p className="py-4 text-6xl text-transparent text-gray-800 bg-clip-text bg-gradient-to-r sm:text-6xl md:text-7xl lg:text-8xl lg:pt-10">
          Honey Dripper Jewelry
        </p>
      </h1>
      <h2 className="max-w-md pb-16 mx-auto my-4 mt-3 text-4xl font-semibold text-gray-800 sm:text-4xl md:mt-5 md:text-4xl">
      Sweet Like Honey
      </h2>
    </div>
  );
};

export default Hero;
