import React from "react";
import img1 from "../assets/img/teachersday.jpg";
import img2 from "../assets/img/ganeshpuja.jpg";
import img3 from "../assets/img/aluminimeet.jpg";
// import img4 from "../assets/img/fashmob2.jpg";
// import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils";

import DestinationCard from "../layouts/DestinationCard";

const Destination = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center md:mx-32 mx-5 ">
      <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">
          Total MCA Gallery
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 mt-14 ">
        <DestinationCard
          img={img1}
          title="Teachers' Day celebration"
          para="Department of Computer Science and Applications, Utkal University"
        />
        <DestinationCard
          img={img2}
          title="Ganesh Puja"
          para="Department of Computer Science and Applications, Utkal University"
        />
        <DestinationCard
          img={img3}
          title="Alumni Meet 2024"
          para="Department of Computer Science and Applications, Utkal University"
        />
      </div>
    </div>
  );
};

export default Destination;
