import React from "react";
import "./Hero.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find the perfect Home</h1>
        <p className="search-text">
          Search the largest selection of luxury high-rise houses and
          multi-family homes.
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="Enter Keywords..." />
          </div>
{/* radio buttons section */}
          <div className="radio">
            <input type="radio" checked />
            <label>Buy </label>
            <input type="radio" />
            <label>Rent </label>
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
