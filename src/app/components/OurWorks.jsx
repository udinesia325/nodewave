import React from "react";
import bg1 from "../assets/images/our_works_bg_1.png";
import bg2 from "../assets/images/our_works_bg_2.png";
import content1 from "../assets/images/our_works_content1.png";
import content2 from "../assets/images/our_works_content_2.png";
import Image from "next/image";

function OurWorks() {
  const items = [
    {
      bg: bg1,
      content: content1,
      title: "Rayu Motor",
      text: `AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales`,
    },
    {
      bg: bg2,
      content: content2,
      title: "Jasabikin web",
      text: `AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales`,
    },
  ];
  return (
    <div className="pt-8">
      <h3 className="text-lg text-white font-semibold text-center">
        Our Works
      </h3>
      <div className="mt-10 flex flex-row gap-10 overflow-x-auto w-full pb-4">
        {items.map((item, index) => (
          <div key={index} className="flex-none relative w-[600px] h-[280px] overflow-hidden rounded-md">
            <Image
              src={item.bg}
              alt="bg1"
              className="w-full h-full absolute z-10 round"
            />
            <div className="w-full h-full px-3 flex justify-center items-center gap-x-3 absolute z-20">
              <Image src={item.content} alt="content1" />
              <div>
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWorks;
