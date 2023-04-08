import React from "react";
import "./styles/home.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { general } from "./routes/routings";
import { useEffect } from "react";
import logo from "./images/Mtlkng__1_-removebg-preview.png"
export function Navigation() {
  const[show,handleshow]=useState(false)
useEffect(()=>{

 const showhiddescroollbar=()=>{
  console.log(window.innerWidth)
  if(window.scrollY>200&&window.innerWidth >800){
    handleshow(true)
  }else{
    handleshow(false)
  }
 }
 console.log(show)
 window.addEventListener('scroll',showhiddescroollbar)
  
  return ()=>{
    window.removeEventListener('scroll',showhiddescroollbar)

  }

},[show])
  // todo hanle navigation hidee or show
  
  const [navigation, setnavigation] = useState(false);
  const handlenav = () => {
    navigation ? setnavigation(false) : setnavigation(true);

    console.log(navigation);
  };
  return (
    // <h1 className=" font-bold text-lg  text-amber-500"> <i>KingsStreeet</i></h1>
    <nav className="navigation " id={`${show===true&& "show" }`}>
<div className="logoimage">
{/* <img src={logo} alt="" /> */}
</div>
      <i className="fa-solid fa-bars" onClick={handlenav}></i>
      <ul className={`navigation_ul & ${navigation ? `shownav` : "hidenav"}`}>
        <i class="fa-solid fa-xmark" onClick={handlenav}></i>

        {general.map((value, i) => (
          <li key={i}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "dormant")}
              to={value.path}
            >
              {value.pathName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
