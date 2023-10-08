"use client";
import React from "react";
import bg from "../assets/images/how we work.png";
import bg_chat from "../assets/images/bg_chat_how_we_work.png";
import Image from "next/image";
import person from "../assets/images/chat_avatar_person.svg";
import nodewave from "../assets/images/chat_avatar_nodewave.svg";

function HowWeWork() {
  return (
    <div
      style={{ backgroundImage: `url('${bg.src}')` }}
      className="bg-no-repeat bg-cover py-4 mt-8"
    >
      <h3 className="text-white text-center text-lg font-semibold">
        How We Work
      </h3>
      <div
        className="w-full md:w-[600px] mx-auto mt-10 p-3 rounded-md md:flex  md:flex-row justify-between"
        style={{ backgroundImage: `url('${bg_chat.src}')` }}
      >
        <div className=" md:flex-none bg-white h-[360px] max-w-[250px] md:h-fit w-[90%] mx-auto md:w-[230px] md:p-0 rounded-sm flex flex-col gap-y-2">
          <PersonChat
            text={"My name is Danny, I’m looking for profile website company"}
          />
          <NodewaveChat
            text={
              "Hello Danny, thank to reaching out us. We are interested to your offer. Maybe we can set meeting"
            }
          />
          <PersonChat text={"Sounds good, I have many desires to explain"} />
          <NodewaveChat
            text={
              "How do I arrange our meeting on Monday at 10 WIB and my team will contact you again"
            }
          />
        </div>
        <div className="p-8 text-center md:text-left">
          <h1 className="font-semibold text-white mb-5">Estimate</h1>
          <p className="text-sm text-white font-light">
            Estimate the cost of creating your application with us. Pricing is
            transparent at the start with a gradual payment method.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;

function PersonChat({ text }) {
  return (
    <div className="flex gap-x-2 justify-between p-2">
      <Image src={person} alt="person" />
      <p className="p-2 bg-[#D9D9D9] text-gray-700 text-xs rounded-lg">
        {text}
      </p>
    </div>
  );
}
function NodewaveChat({ text }) {
  return (
    <div className="flex gap-x-2 flex-row-reverse justify-between p-2">
      <Image src={nodewave} alt="person" />
      <p className="p-2 bg-[#D9D9D9] text-gray-700 text-xs rounded-lg">
        {text}
      </p>
    </div>
  );
}
