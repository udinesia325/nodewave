import Image from "next/image";
import React from "react";
import mobile from "../assets/icons/ui-design 1.svg";
import web_design from "../assets/icons/web-design (1) 1.svg";
import arrow_right from "../assets/icons/arrow-right.svg";
import phone_cover from "../assets/images/phone-cover.png";
import phone_screen from "../assets/images/phone_screen.png";

function OurProducts() {
  return (
    <div className="mt-28 flex flex-col">
      <h1 className="text-xl font-semibold text-center mb-10">Our Product</h1>
      <div className="grid grid-rows-[350px_150px_150px] md:grid-rows-[150px_150px] md:grid-cols-[340px_400px] grid-flow-col gap-4  mx-auto">
        <div className="order-3 md:order-1 md:col-span-1 md:row-span-1 flex gap-x-2 justify-center items-center bg-white p-4 rounded-xl text-slate-700 relative">
          <Image src={mobile}  className="row-span-3 w-[60px] md:w-[40px]" alt="mobile" />
          <div className="row-span-2 col-span-1">
            <h1 className="text-2xl md:text-lg font-semibold">Mobile Apps</h1>
            <p className="w-[220px] text-md md:text-xs text-slate-800 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <Image
            src={arrow_right}
            width={20}
            alt="arrow"
            className="absolute right-2 bottom-3 md:right-8 md:bottom-10 transition-all hover:scale-125"
          />
        </div>
        <div className="order-2 md:order-2 md:col-span-1 md:row-span-1 flex gap-x-2 justify-center items-center  p-4 rounded-xl border scale-95 relative">
          <Image
            src={web_design}
            
            className="row-span-3 w-[60px] md:w-[40px]"
            alt="web design"
          />
          <div className="row-span-2 col-span-1">
            <h1 className=" text-2xl md:text-lg font-semibold">Website</h1>
            <p className=" w-[220px] text-md md:text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <Image
            src={arrow_right}
            width={20}
            alt="arrow"
            className="absolute right-2 bottom-3 md:right-8 md:bottom-10 transition-all hover:scale-125"
          />
        </div>

        <div className="order-1 md:order-3 md:col-span-1 md:row-span-2 flex flex-col items-center bg-white text-slate-800 rounded-lg p-4">
          <div className="flex gap-2 justify-center">
            {Array.from({length:3})
              .fill(0)
              .map((d, i) => (
                <div key={i} className="relative">
                  <Image src={phone_cover} width={50}  alt="phone" />
                  <Image
                    src={phone_screen}
                    width={45}
                    className="absolute z-10 top-[2px] left-[3px]"
                    alt="phone"
                  />
                </div>
              ))}
          </div>
          <h1 className="text-xl font-semibold mt-4">Mobile Apps</h1>
          <p className="text-sm font-thin text-center">Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.</p>
          <button className="py-2 px-3 mt-5 text-white text-sm rounded-md bg-primary hover:bg-primary/90">Pelajari Selengkapnya</button>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
