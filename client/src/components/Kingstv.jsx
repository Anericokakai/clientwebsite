import React from "react";
import { Navigation } from "./Navigation";
import Kingstvhome from "./kingstvFolder/Kingstvhome";
import { categories } from "./routes/routings";
import "./styles/home.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
function Kingstv() {
  return (
    <div className="">
      
      <div className="Homeholder service">
      <Navigation></Navigation>
      </div>
      <div className="flex justify-between items-center min-h-20 px-4 pt-2">
        <h1 className=" kingshome_title font-bold text-3xl   ">kings tv</h1>
        <div class="dropdown">
          <button class="dropbtn shadow-xl">More categories on Kings tv</button>
          <div class="dropdown-content">
            {categories.map((value, i) => (
              <NavLink               className={({ isActive }) => (isActive ? "active" : "dormant")} to={value.path} key={i}>
                {value.pathName}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

{/* 39ILoDWK-P4
RjzC-8-P8DY
Pv4xWJHva3g
FZwbO1ANKIs
xzvklmoHO3M */}
      <div className="secondHomecontainer kingstv">
        <Kingstvhome video='39ILoDWK-P4' ></Kingstvhome>
        <Kingstvhome video='RjzC-8-P8DY'></Kingstvhome>
        <Kingstvhome video='Pv4xWJHva3g'></Kingstvhome>
        <Kingstvhome video='FZwbO1ANKIs'></Kingstvhome>
        <Kingstvhome video='xzvklmoHO3M'></Kingstvhome>
     
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Kingstv;
