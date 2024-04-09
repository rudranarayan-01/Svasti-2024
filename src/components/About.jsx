import React from "react";
import img from "../assets/img/bijay.jpg";
import Button from "../layouts/Button";
import { Link } from "react-scroll";
import { fadeIn, slideIn, staggerContainer } from "../../utils";
import { motion } from "framer-motion";

const About = () => {
  const backgroundColor = `bg-white`;
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=""
    >
      <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 bg-darkBackground gap-10">
        <motion.span variants={fadeIn("right", "tween", 0.3, 1)}>
          <div className=" w-full lg:w-2/4 space-y-5">
            <h1 className=" font-semibold text-4xl text-white leading-tight">
                Share your experience with us !
            </h1>
            <p className=" text-[#bdbdbd] pb-5">
            If we have made any mistake and you felt bad about that, then forgive your younger brothers and sisters and please share your experience and feedback with us.
            </p>

            <Link to="contact" spy={true} smooth={true} duration={500}>
              <Button title="Share Now" backgroundColor={backgroundColor} />
            </Link>
          </div>
        </motion.span>

        <motion.span
          variants={fadeIn("left", "tween", 0.3, 1)}
          className=" lg:w-2/4"
        >
          <div className=" w-full ">
            <img className=" rounded-2xl" src={img} alt="img" />
          </div>
        </motion.span>
      </div>
    </motion.div>
  );
};

export default About;
