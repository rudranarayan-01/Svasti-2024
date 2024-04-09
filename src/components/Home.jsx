import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/farewell_sen_grp.jpg";
import { Link } from "react-scroll";
import { fadeIn, slideIn, staggerContainer } from "../../utils";
import { motion } from "framer-motion";

const Home = () => {
  const backgroundColor = `bg-brightColor`;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={"innerWidth container"}
    >
      <div className=" min-h-screen lg:min-h-[90vh] flex flex-col justify-center gap-5 lg:flex-row items-center md:mx-32 mx-5">
        <div className=" flex flex-col text-center lg:text-start gap-5">
          <h1 className=" font-semibold text-5xl leading-tight">
            <motion.span
              className="upperElements"
              variants={fadeIn("right", "tween", 0.2, 1)}
            >
              Please join us for the farewell party
            </motion.span>
          </h1>

          <motion.span variants={fadeIn("right", "tween", 0.3, 1)} className="   ">
            <p className="">
              Bidding goodbye is hard! But let's make this one happy and
              memorable! You are invited to attend the farewell party. As our way
              of saying Thank You to those who guided us and inspired us all the
              way.
            </p>

          <div className=" lg:pl-24 pt-5 ">
            <Link to="footer" spy={true} smooth={true} duration={500}>
              <Button title="Destination" backgroundColor={backgroundColor} />
            </Link>
          </div>
          </motion.span>

        </div>

        
        <div className=" mt-14 lg:mt-0 w-full  ">
          <motion.img className="hero-img lg:ml-12 rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" variants={fadeIn("left", "tween", 0.5, 1)} src={img} alt="img" width="100%" />
        </div>

      </div>
    </motion.div>
  );
};

export default Home;
