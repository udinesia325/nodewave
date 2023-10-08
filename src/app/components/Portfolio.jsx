import Image from "next/image";
import React from "react";
import portfolio1 from "../assets/images/portfolio1.png";
import portfolio2 from "../assets/images/portfolio2.png";
import shoppingSale from "../assets/icons/shopping-sale.svg"

function Portfolio() {
  return (
    <div className="pt-10">
      <h3 className="text-white text-center text-lg font-semibold">
        Start Creating Websites or Mobile Apps For You Now
      </h3>
      <div className="mt-8 flex justify-center gap-x-5">
        <Card
          image={portfolio1}
          title="Website"
          price={90000}
          discount={9200}
        />
        <Card
          image={portfolio2}
          title="Mobile apps"
          price={90000}
          />
      </div>
    </div>
  );
}

export default Portfolio;

function Card({ title = "", image, price = 0, discount = 0 }) {
  return (
    <div className="bg-white flex gap-0 rounded-md">
      <div className="basis-1/2 flex flex-col items-center  text-black">
        <h1 className="mt-10 text-xl font-semibold">{title}</h1>
        <h3 className="text-base font-semibold mt-5">Start from</h3>
        {discount ? (
          <span className="text-sm line-through decoration-red-700 relative">Rp, {Number(discount).toLocaleString("id")} <Image src={shoppingSale} width={20} alt="discount" className="absolute -right-2 -top-2" /></span>
        ) : null}
        <span className="text-sm">Rp, {Number(price).toLocaleString("id")}</span>
      </div>
      <Image className="basis-1/2 " src={image} alt="image portfolio" />
    </div>
  );
}
