import React from "react";
import Button from "../layouts/Button";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils";
import { motion } from "framer-motion";


const DestinationCard = (props) => {
  const backgroundColor = `bg-brightColor`;
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="paddings wrapper"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.6)}
        className="card hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        style={{ flexDirection: "column" }}

      >
        <div className=" w-full  cursor-pointer ">
          <img className=" rounded-t-lg" src={props.img} alt="img" />

          <div className=" bg-[#ffffff] space-y-3 rounded-b-lg">
            <h2 className=" text-xl font-medium text-center">{props.title}</h2>
            <p className=" text-sm paddings">{props.para}</p>
            <div className=" flex flex-row justify-center">
              {/* <Button title="Book Tickets" backgroundColor={backgroundColor} /> */}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default DestinationCard;
