import React from "react";
import { Navigation } from "../../Navigation";
import Footer from "../../Footer";
import Reusable from "../Reusable";
import { categories } from "../../routes/routings";
import { NavLink } from "react-router-dom";

function Health() {
  return (
    <div>
      <div className="Homeholder ">
        <Navigation></Navigation>
        Agriculture
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
      <div className="secondHomecontainer ">
      <Reusable video={'HTL2HGMAsb0'}></Reusable>
        <Reusable video={'RKq23CKnnk0'}></Reusable>
        <Reusable video={'1YLSGE8l1vs'}></Reusable>
        <Reusable video={'IcxfKSklcso'}></Reusable>
        <Reusable video={'lEv27elq8z0'}></Reusable>
      </div>
      
    </div>
  );
}

export default Health;
