import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/hero.css";    

const Hero = ({ name, quote }) => {

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/", { replace: true });
  };


  return (
    <div className="hero">

      <div className="navbar">
        <button onClick={handleReturn}>
        Home Page
        </button>
      </div>

      <h1>{name}</h1>
      <p>"{quote}"</p>

    </div>
  );
};

export default Hero;
