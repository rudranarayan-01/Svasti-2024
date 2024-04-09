import React from "react";
import img from "../assets/img/fashmob2.jpg";
import pic1 from "../assets/img/service.png";
import pic2 from "../assets/img/user.png";
import pic3 from "../assets/img/wallet.png";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils";

const Features = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=""
    >
      <h1 className=" font-medium text-center text-4xl ">
        Some amusements with you
      </h1>
      <div className=" min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14">
        <div className=" w-full lg:w-2/4">
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="">
            <div className=" space-y-4">
              <p>
                The achievements we gain do make us memorable in the history of
                this campus. Even your achievements will be remembered by our
                University.You have also given us such sweet memories. We have a
                short life and we need to make it worthy. Do your best and excel
                every challenge.
              </p>
            </div>

            <div className="w-full lg:w-3/5 mt-10 lg:ml-14">
              <img
                className=" rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
                src={img}
                alt="img"
              />
            </div>
          </motion.div>
        </div>

        <div className=" w-full lg:w-2/4 space-y-10">
          <div className=" flex flex-row gap-5">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className=" space-y-3  second-r gap-5"
            >
              <div className=" flex flex-row items-center w-24">
                <img src={pic1} alt="img" />
              </div>
              <div>
                <h1 className=" font-semibold text-xl">Friendly behaviours</h1>
                <p className=" text-[#898888]">
                  We all today as juniors really want to thank all of our
                  seniors who has been very generous and cooperative to us
                  every time we approached them for their help.
                </p>
              </div>
            </motion.div>
          </div>

          <div className=" flex flex-row gap-5">
            <motion.div
              variants={fadeIn("left", "tween", 0.4, 1)}
              className=" space-y-3  second-r gap-5"
            >
              <div className=" flex flex-row items-center w-28">
                <img src={pic2} alt="img" />
              </div>
              <div className=" space-y-3">
                <h1 className=" font-semibold text-xl">
                  Unforgettable experience
                </h1>
                <p className=" text-[#898888]">
                We thank you from the bottom of our hearts for the endless support, wisest advice, and most memorable times.
                </p>
              </div>
            </motion.div>
          </div>

          <div className=" flex flex-row gap-5">
            <motion.div
              variants={fadeIn("left", "tween", 0.6, 1)}
              className=" space-y-3  second-r gap-5"
            >
              <div className="flex flex-row items-center w-24">
                <img src={pic3} alt="img" />
              </div>
              <div className=" space-y-3">
                <h1 className=" font-semibold text-xl">Humanitarian tendencies</h1>
                <p className=" text-[#898888]">
                  Your presence in the department is a gift, and your impact will be felt for the next batches to come.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
