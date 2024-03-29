import React from "react";
// import images
import FemaleHero from "../img/woman_hero.png";
// import Link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-no-repeat bg-cover bg-center py-24 h-[800px] bg-hero">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trends
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLE <br />
            <span className="font-semibold">WOMEN'S</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={FemaleHero} alt="Female_Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
