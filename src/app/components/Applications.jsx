import Image from "next/image";
import React from "react";
import list from "../assets/icons/material-symbols_list.svg";
import basketball from "../assets/icons/basketball.svg";
import book from "../assets/icons/ph_book-bold.svg";
import shop from "../assets/icons/shop_outlined.svg";
import company from "../assets/icons/mdi_company.svg";
import cashier from "../assets/icons/cashier.svg";
import chat from "../assets/icons/ph_chat-bold.svg";

const items = [
  {
    title: "E-Commerce",
    icon: shop,
  },
  {
    title: "Company Profile",
    icon: company,
  },
  {
    title: "Cashier",
    icon: cashier,
  },
  {
    title: "Chat",
    icon: chat,
  },
  {
    title: "E-Commerce",
    icon: shop,
  },
  {
    title: "E-Commerce",
    icon: shop,
  },
];
function Applications() {
  return (
    <div className="pt-4">
      <h3 className="text-white text-lg font-semibold text-center">
        Applications that can be made
      </h3>
      <div className="mt-10 flex flex-col md:flex-row gap-x-4 gap-y-8 md:gap-y-0">
        <CardApp icon={list} title="Online Attendance">
          <p className="text-xs font-thin">
            With the times, your team may be able to work in the office or
            outside the office. Get the accuracy of your team's work hours with
            your own company's special online attendance feature with features
            such as:
          </p>
          <ul className="list-disc text-xs ml-5 font-thin mt-3">
            <li>Clock in and Clock Out attendance</li>
            <li>Face Photo</li>
            <li>Face Recognition</li>
            <li>Accurate time stamp down to seconds</li>
            <li>GPS location of employees</li>
          </ul>
        </CardApp>
        <CardApp icon={basketball} title="Online Attendance">
          <p className="text-xs font-thin">
            Create your sports center field booking application. Suitable for
            futsal, mini soccer, badminton, tennis, golf, basketball, to table
            tennis. Give your customers the freedom to
          </p>
          <ul className="list-disc text-xs ml-5 font-thin mt-3">
            <li>Choose a booking schedule</li>
            <li>Online payments</li>
            <li>Automatic scheduling system</li>
            <li>Search for Friends feature</li>
            <li>Split Payment with team members</li>
            <li>Information and announcements from you</li>
          </ul>
        </CardApp>
        <CardApp icon={book} title="Online Attendance">
          <p className="text-xs font-thin">
            Offer your services in your own application to place orders to
            delivery directly to the client's house. Suitable for ac service,
            cleaning, cleaning service, CCTV, massage, and even other digital
            services. Features that can be made:
          </p>
          <ul className="list-disc text-xs ml-5 font-thin mt-3">
            <li>Memilih jenis dan kategori jasa yang dikehendaki</li>
            <li>
              Melakukan reservasi online dan pembayaran dengan metode pembayaran
              digital
            </li>
            <li>Penjadwalan dengan tim lapangan</li>
            <li>Aplikasi khusus untuk tim</li>
            <li>Promosi dan Kode voucher khusus</li>
          </ul>
        </CardApp>
      </div>
      <div className="mt-8 flex items-center justify-center overflow-x-auto gap-x-6 w-full pb-6 cursor-pointer">
        {items.map((item, index) => (
          <div key={index} className="flex-none gap-x-3 font-semibold flex items-center">
            <Image src={item.icon} width={27} alt="icon" />
            <h1>{item.title}</h1>
          </div>
        ))}
        <h1 className="flex-none">and many others</h1>
      </div>
    </div>
  );
}

export default Applications;

function CardApp({ icon, title, children }) {
  return (
    <div className="px-3">
      <div className="flex items-center justify-center md:justify-start gap-x-3 mb-3 ">
        <Image src={icon} width={40} alt="icon" />
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
}
