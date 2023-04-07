import React from "react";
import who from "../images/1.jpg";
import "./homecomponets.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function SecondHome({image,card ,link}) {
  
 
  const [mouseenter, setmouseenter] = useState(false);
  const handleMouseenter = () => {
    mouseenter ? setmouseenter(false) : setmouseenter(true);
  };
  return (
   <Link to={link}
   target="blank"
   
   >
    <div className="second_card">
      <div className="homeimage" onMouseEnter={handleMouseenter}>
      
        <img src={image} alt="" />
        <div
          className={` description ${mouseenter ? "hidedesc" : "show desc"} `}
        >
          <h1>{card}</h1>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default SecondHome;
