import React from "react";
import flower from "../../assets/Logo/floweroflife.png";
import ParaBrahman from "../../assets/Logo/ParaBrahman.png";
import "../../App.css";
import "./Hometext.css";

function Hometext() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center relative bg-white overflow-hidden">
      {/* Rotating Glowing Rays */}
      <div className="absolute w-[500px] h-[500px]" />

      {/* Main Rotating Image */}
      <img
        src={flower}
        alt="Flower of Life"
        className="w-72 h-72 mb-5 animate-spin-slow z-10"
      />

      {/* Large ParaBrahman Logo */}
      <img
        src={ParaBrahman}
        alt="ParaBrahman Logo"
        className="w-[85vw] max-w-[700px] mb-6 z-10"
      />

      {/* Tagline */}
      <h2 className="font-soria text-3xl mt-6 z-10">
        Your Personal{" "}
        <span className="font-saman text-yellow-600">Trikal Darshi</span>
      </h2>
    </div>
  );
}

export default Hometext;
