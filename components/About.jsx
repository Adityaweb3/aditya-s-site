import Link from "next/link";
import React from "react";
import { HiAcademicCap } from 'react-icons/hi';
import { Gi3DGlasses } from 'react-icons/gi';
import { BiMusic } from 'react-icons/bi';
import { MdExpandMore } from "react-icons/md";
// import resume from "../public/assets/resume.pdf";

const About = () => {
  return (
    <div id="About" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center">
        <h2 className="text-2xl md:text-5xl tracking-wider uppercase text-red-500 font-bold">
          About Me
        </h2>


        <div className="shadow-xl rounded-md shadow-red-300 my-8 px-8">
          {/* <div className="flex">
            <div className="bg-cover w-56 h-80 mt-10  mb-10 sm:hidden md:block">
              <Image className="rounded-lg sm:hidden md:block" objectFit="cover" src={heroImage} alt="me" />
            </div> */}

          <div className="mt-10 pb-10">
            <p className="py-4 max-w-2xl md:text-base text-xs mx-auto">
            Hi, I am Aditya, A full-stack Blockchain Developer. I consider that my code speaks for itself, so have a
look at my GitHub !! . Other than being a developer  Love to talk about business , Entrepreneurship .  Building something to help our society .  
            </p>
            <div className="py-4 max-w-2xl md:text-base text-xs p-2 text-left mx-auto">

              🔴 Blockchain Developer
              <br />
              🔴 Machine Learning
              <br />
              🔴 Flutter Developer
              <br />
              🔴 UI/UX Designer

            </div>

            <div className="flex flex-col py-4 max-w-2xl mx-auto ">
              <h3 className="flex text-red-500 text-lg"> <HiAcademicCap className="text-2xl my-1 mr-2" />  Education </h3>
              <p className="text-red-500 md:text-base text-xs text-left">Indian Institute of Information Technology, Dharwad.</p>
              <p className="text-left md:text-base text-xs">Bachelor of Technology (2020 - 2024) .</p>
            </div>

            <div className="flex flex-col py-4 max-w-2xl mx-auto ">
              <h3 className="flex text-red-500 text-lg">  🚀 Experience </h3>
              <br></br>
              <p className="text-red-500 md:text-base text-xs text-left">Blockchain Developer at Backed.fund (Oct 2022 - Present)</p>
              <p className="text-left md:text-base text-xs">Backed is a next-gen Web3 platform that acts as a bridge between web2 and web3 that allows users to invest in asset-backed NFTs. The asset class includes Fine wine, Fine rum, Fine art, Collectibles, Watches, Antiques, Coins, Stamps, Real Estate, Celebrity items etc.</p>
              <br></br>
              <p className="text-red-500 md:text-base text-xs text-left">Blockchain Developer at Velozity Global Solutions (September 2022 - Present)</p>
              <p className="text-left md:text-base text-xs"> Interpret client requirements to the blockchain architect and lead smart contracts
development. Develop features and augmentations in a stable, tested, and efficient way
Develop Solidity code engineering on client platforms
</p>
<br></br>
<p className="text-red-500 md:text-base text-xs text-left">Blockchain Developer at CentreLocus (June 2022 - September 2022)</p>
              <p className="text-left md:text-base text-xs">Built a Nft Sell Site for a medicine company , Understanding architecture of DAPPS on various Blockchains e.g. ERC, TRON, EOS, Algorand.</p>
              <br></br>
              <p className="text-red-500 md:text-base text-xs text-left">Blockchain Developer at Lepto India (June 2022 - November 2022)</p>
              <p className="text-left md:text-base text-xs">Mentored Students as Blockchain Mentor At Lepto India</p>



            </div>

            <div className="flex flex-col py-4 max-w-2xl mx-auto ">
              <h3 className="flex text-red-500 text-lg">   🐱‍👤Certifications </h3>
              <p className="text-red-500 md:text-base text-xs text-left">IBM Blockchain Essentials</p>
              <p className="text-left md:text-base text-xs"> Link : https://courses.cognitiveclass.ai/certificates/755f60ddb97241bb9b022d160012d28e</p>
              <br></br>
              <p className="text-red-500 md:text-base text-xs text-left">Python ( HackerRank)</p>
              <p className="text-left md:text-base text-xs"> Link : https://www.hackerrank.com/certificates/f7429c5703bf</p>
              <br></br>
              <p className="text-red-500 md:text-base text-xs text-left">Smart India Hackathon 2022 Finallist</p>
              <br></br>
              <p className="text-red-500 md:text-base text-xs text-left">Smart Contracts (Coursera)</p>
              <br></br>
              <p className="text-red-500 md:text-base text-xs text-left">Intermediate Machine Learning ( Kaggle) </p>
              <p className="text-left md:text-base text-xs"> Link : https://www.kaggle.com/learn/certification/aditya2003/intermediate-machine-learning</p>
              <br></br>
              <p className="text-red-500 md:text-base text-xs text-left">Design Thinking ( Simplilearn) </p>
              <br></br>
              <p className="text-red-500 md:text-base text-xs text-left">Cyber Security Essentials ( Cisco) </p>
              <p className="text-left md:text-base text-xs"> Link : https://www.linkedin.com/feed/update/urn:li:activity:6814985862087012352/</p>
              <br></br>
              <p className="text-red-500 md:text-base text-xs text-left">Non Fungible Tokens  </p>
              <p className="text-left md:text-base text-xs"> See on Opensea : https://opensea.io/assets/matic/0x4bcc6e2E278551Bc8b40902f453A02d59434A6E8/1093</p>

              
            </div>
          </div>

          {/* </div> */}



        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          <Link href="/#contact" download={true}>
            <div className="group flex items-center justify-center my-8 hover:border-red-500 border-2 text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">
              Hire Me
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <a download href="/resume.pdf">
            <div className="group flex items-center justify-center my-8 hover:bg-white hover:text-custom-blue bg-red-500 text-white px-6 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer">

             Resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;