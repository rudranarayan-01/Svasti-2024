import React, { useState } from "react";
import { Link } from "react-scroll";
// import Button from "../layouts/Button";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils";
import useHeaderShadow from "../hooks/useHeaderShadow";
import { AiOutlineMenu } from "react-icons/ai";
import { CiRoute } from "react-icons/ci";
import { GrContact } from "react-icons/gr";
import { IconContext } from "react-icons";

const Navbar = () => {
  const style = { color: "white", fontSize: "1.5em" };
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const backgroundColor = `bg-white`;
  const headerShadow = useHeaderShadow();

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className="bg-primary wrapper"
      viewport={{ once: true, amount: 0.25 }}
      style={{
        boxShadow: headerShadow,
        paddingBottom: ".8rem",
        paddingTop: ".8rem",
      }}
    >
      <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-white">
        <div className=" flex items-center">
          <Link to="/" spy={true} smooth={true} duration={500}>
            <h1 className=" text-xl cursor-pointer heading">Svasti</h1>
          </Link>
        </div>
        <nav className="hidden lg:flex flex-row items-center gap-20">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer nav-icons"
          >
            <ion-icon name="home-outline"></ion-icon>
          </Link>

          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer nav-icons"
          >
            <CiRoute />
          </Link>

          <Link
            to="destination"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer nav-icons"
          >
            <ion-icon name="image-outline"></ion-icon>
          </Link>
          {/* <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </Link> */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/contact-card.png" alt="contact-card"/>
            
          </Link>
        </nav>

        <div
          className=" lg:hidden flex items-center p-2"
          onClick={handleChange}
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer nav-icons"
        >
          <ion-icon name="home-outline"></ion-icon>
        </Link>
        <Link
          to="features"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer nav-icons"
        >
          <CiRoute className="inline"/>
        </Link>
        <Link
          to="destination"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer nav-icons"
        >
          <ion-icon name="image-outline"></ion-icon>
        </Link>
        {/* <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          About
        </Link> */}
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/contact-card.png" alt="contact-card" className="inline"/>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
