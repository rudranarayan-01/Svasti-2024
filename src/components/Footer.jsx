import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import {FiMail} from "react-icons/fi"
import { footerVariants, staggerChildren } from "../../utils";
import {motion} from 'framer-motion'


const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="">

    <div className="bg-darkBackground text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4 heading">Svasti</h1>
          <p className=" text-sm">
          We’ll meet again, Don’t know where, don’t know when, but we know we’ll meet again, Some sunny day.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Destination
          </h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              MCA Department, Utkal University
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Bhubaneswar, Odisha
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              India
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Date and Time</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              12th April 2024
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Friday Day, 9:30 AM 
            </a>
          
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-1">Follow Us</h1>
          <nav className=" flex flex-col md:items-center gap-4">
            <a href="https://www.instagram.com/creativecomm.tech?igsh=MXVsbnZlbHNzaWI0YQ==" target="blank">
            <BsInstagram
              size={25}
              className=" hover:text-brightColor transition-all cursor-pointer"
            />
            </a>
            <a href="mailto:codingislife01@gmail.com" style={{textDecoration:"none"}}>
              <FiMail
                size={25}
                className=" hover:text-brightColor transition-all cursor-pointer"
              />
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center text-sm py-4">
            Copyright @ 2024  <a href="https://datapirateslearning.netlify.app/" target="blank" className=" text-brightColor">Datapirates</a> by
            <span className=" text-brightColor"> Rudranarayan Sahu</span> | All
            rights reserved 
          </p>
        </p>
      </div>
    </div>
    </motion.section>
  );
};

export default Footer;
