import React, { useRef, useState } from "react";
import img from "../assets/img/Flashmob.jpg";
import Button from "../layouts/Button";
import emailjs from "@emailjs/browser";
import { fadeIn, slideIn, staggerContainer } from "../../utils";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2lft361",
        "template_80nm0y9",
        form.current,
        "e8RajqzHeYJjXlpLh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent");
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const backgroundColor = `bg-brightColor`;
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth container"
    >
      <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
        <div className=" flex flex-col lg:flex-row justify-between w-full">
          <form
            className=" bg-[#F2F2F2] p-5 rounded-xl "
            ref={form}
            onSubmit={sendEmail}
          >
            <motion.span
              className=" w-full lg:w-2/5 space-y-5 p-5 "
              variants={fadeIn("right", "tween", 0.2, 1)}
            >
              <h1 className="text-4xl font-semibold text-center">Contact us</h1>
              <div className=" flex flex-col">
                <label htmlFor="userName">Full Name</label>
                <input
                  className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                  type="text"
                  name="user_name"
                  id="userName"
                  placeholder="Enter your name"
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="userEmail">Email</label>
                <input
                  className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                  type="email"
                  required
                  name="user_email"
                  id="userEmail"
                  placeholder="Enter your email"
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="userMessage">Message</label>
                <textarea
                  className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                  name="message"
                  required
                  id="userMessage"
                  cols="30"
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="flex flex-row justify-center">
                <Button
                  title="Submit"
                  value="Send"
                  backgroundColor={backgroundColor}
                />
              </div>
              <br />
              <span className="flex justify-center">
                {done && "Thanks for Contacting us !"}
              </span>
            </motion.span>
          </form>

          <div className=" flex flex-col items-center justify-center w-full lg:w-2/4 my-5">
            <motion.span
              className="  "
              variants={fadeIn("left", "tween", 0.5, 1)}
            >
              <img className="rounded-lg" src={img} alt="" />
              <p className=" text-center text-sm pt-4 text-[#898888]">
                We'd love to hear from you! Whether you have questions or
                feedback, please don't hesitate to reach out. Our team is here
                to assist you every step of the way. Simply fill out the form,
                and we'll be in touch shortly.
              </p>
            </motion.span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
