import Image from "next/image";
import React from "react";
import nodewave from "../assets/icons/nodewave.png";
import fb from "../assets/icons/facebook.svg";
import tw from "../assets/icons/twitter.svg";
import yt from "../assets/icons/youtube.svg";
import lk from "../assets/icons/linkedin.svg";
import ig from "../assets/icons/instagram-fill.svg";

function Footer() {
  return (
    <div className="flex flex-col items-center pt-16 text-center">
      <Image src={nodewave} alt="nodewave" width={200} />
      <p className="text-xl font-black mt-8">PT NODEWAVE SOLUSI TEKNOLOGI</p>
      <p className="text-xl mt-10 font-semibold">
        Graha Pena Surabaya <br />
        Jl. Ahmad Yani no. 88 Surabaya <br />
        Phone : +62811258280 <br />
        Email : support@nodewave.id
      </p>

      <div className="flex gap-3 my-10">
        <Image src={fb} width={30} alt="fb" />
        <Image src={tw} width={30} alt="tw" />
        <Image src={yt} width={30} alt="yt" />
        <Image src={lk} width={30} alt="lk" />
        <Image src={ig} width={30} alt="ig" />
      </div>
    </div>
  );
}

export default Footer;
