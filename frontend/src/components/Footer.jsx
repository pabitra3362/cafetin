import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { VscCallIncoming } from "react-icons/vsc";
import { LuClock } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-slate-900 text-white grid justify-start items-center gap-8 py-5">
      <div className="info w-full md:w-[80vw] lg:w-[80vw] mx-auto px-5 grid md:flex md:justify-between items-center md:items-start gap-8 py-8 ">
        <div className="address grid justify-start items-center gap-3">
          <div className="logo">
            <GrLocation className="size-10 text-custom-brown" />
          </div>
          <div className="title font-bold text-lg">Address</div>
          <div className="desc w-44">
            G - 145, Happy Goldmine Shopper, Nr. Safal Sqaure, Vesu, Surat, 395007
          </div>
        </div>
        <div className="email grid justify-start items-center gap-3">
          <div className="logo">
            <MdOutlineMail className="size-10 text-custom-brown" />
          </div>
          <div className="title font-bold text-lg">E-mail</div>
          <div className="desc">cafelin24@gmail.com</div>
        </div>
        <div className="contact grid justify-start items-center gap-3">
          <div className="logo">
            <VscCallIncoming className="size-10 text-custom-brown" />
          </div>
          <div className="title font-bold text-lg">Call Us</div>
          <div className="desc">+91 9054323293</div>
        </div>
        <div className="time grid justify-start items-center gap-3">
          <div className="logo">
            <LuClock className="size-10 text-custom-brown" />
          </div>
          <div className="title font-bold text-lg">Opening Hours</div>
          <div className="desc grid grid-cols-1 justify-start items-center">
            <div>10:00 AM - 11:00 PM </div>
            {/* <div>Saturday: 8:00 - 23:00</div> */}
          </div>
        </div>
      </div>

      <div className="w-screen border border-white opacity-35 h-[1px]"></div>

      <div className="rights w-full md:w-[80vw] lg:w-[80vw] grid md:flex md:flex-row-reverse  justify-items-center md:justify-between gap-5 px-3 mx-auto">
        <div>
          <a
            href="#top"
            className="p-2 bg-slate-950 rounded-full flex justify-center items-center"
          >
            <FaArrowUp className="size-7 text-custom-brown" />
          </a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div>
            <img
              className="rounded-full"
              src="./logo.jpg"
              alt="logo"
              height={40}
              width={40}
            />
          </div>
          <div className="font-bold text-sm md:text-lg lg:text-lg">
            Copyright @ {new Date().getFullYear()} - All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
