import React, { useState } from "react";

import { MdExpandMore } from "react-icons/md";

import dsa from "../public/assets/portfolio/dsa.jpg";
import nextjs from "../public/assets/portfolio/nextjs.png";
import weather from "../public/assets/portfolio/weather.webp";
import reactnews from "../public/assets/portfolio/reactnews.jpg";
import dancing from "../public/assets/portfolio/dancing.webp";
import nextseries from "../public/assets/portfolio/nextseries.jpg";

import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Skill - Verify Dapp",
      imageSrc: reactnews,
      url: "react-News",
    },
    {
      id: 2,
      title: "Backed fund",
      imageSrc: weather,
      url: "weather",
    },
    {
      id: 3,
      title: "Funding DAO",
      imageSrc: nextjs,
      url: "use-state-hook",
    },
    {
      id: 4,
      title: "Wagmi Name Service",
      imageSrc: dsa,
      url: "dsa files",
    },
    {
      id: 5,
      title: "Weather App Using Flutter",
      imageSrc: dancing,
      url: "react-parallax",
    },
    {
      id: 6,
      title: "NFT Marketplace On Solana",
      imageSrc: nextseries,
      url: "blog site",
    },
    
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <div className="flex flex-col justify-end items-center w-full">
          <h2 className="text-2xl md:text-5xl tracking-wider uppercase text-red-500 font-bold">
            projects 
          </h2>
          <p className="py-8 max-w-2xl">
            Some of my Projects to show and Verify my skill : 
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-red-500 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-red-500 hover:bg-white hover:text-custom-blue text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
