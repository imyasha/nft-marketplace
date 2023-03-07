import React from "react";
import "../styles/Hero.css";
import Header from "./Header";

const Hero = () => {
  return (
    <div id="hero">
      <Header />
      <h1 id="header-text-first"> NFT </h1>
      <h1 id="header-text-second"> Darkroom Marketplace</h1>
    </div>
  );
};

export default Hero;
