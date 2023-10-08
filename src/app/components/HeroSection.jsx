import Image from "next/image";
import code from "../assets/images/hero_code.png";

function HeroSection() {
  return (
      <div className="px-5 pt-24 relative">
        <h1 className="text-3xl font-bold leading-relaxed">
          Make Your Own <br /> Website and Mobile Application <br /> With
          Nodewave
        </h1>
        <button className="py-2 px-3 bg-primary text-sm rounded-full mt-4">
          Get Started Now
        </button>
        <p className="mt-5">
          Create Mobile Applications and Websites for Companies or Your Business <br />
          Have a transparent pricing, easy and straightforward development
          process
        </p>
      <Image src={code} alt="bg" className="absolute -z-10 -top-[180px] right-0 h-[600px] min-h-full" />
      <div className="h-20 bg-gradient-to-b from-transparent to-black absolute -bottom-20 left-0 right-0" ></div>
      </div>
  );
}

export default HeroSection;
