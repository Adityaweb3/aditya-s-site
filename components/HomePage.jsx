import React from "react";
import heroImage from "../public/assets/heroImage.JPG";
import { MdExpandMore } from "react-icons/md";
import Typical from 'react-typical'
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="bg-back1 min-h-screen max-h-screen bg-cover bg-center bg-no-repeat max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-44 h-44 mx-auto overflow-hidden rounded-full">
          <Image className="rounded-full " objectFit="cover" src={heroImage} alt="About" />
        </div>

        <h5 className="uppercase font-bold mt-4">
          <span className="text-white md:text-xl  text-xs">
           Hola , I'm <span className="text-red-500">Aditya K Pandey</span>
          </span>
          <div className="flex justify-center items-center mt-4 w-full">
            <span className="font-bold font-sans text-white text-sm md:text-3xl text-left mb-5">
              {" "}
              <h5>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Blockchain Developer",
                    1000,
                    "Machine Learning",
                    1000,
                    "Flutter Developer ",
                    1000,
                    "Entrepreneurial Mindset",
                    1000,
                  ]}
                />

              </h5>
            </span>
          </div>

        </h5>

        <p className="text-white md:text-xl text-xs mx-auto">
          A passionate Blockchain Developer from India ;
        </p>

        <Link href="/#About">
          <div className="group flex items-center justify-center my-8 bg-red-500 hover:bg-white hover:text-custom-blue text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
