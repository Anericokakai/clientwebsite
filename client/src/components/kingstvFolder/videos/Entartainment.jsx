import React from "react";
import { Navigation } from "../../Navigation";
import Footer from "../../Footer";
import Reusable from "../Reusable";
import { NavLink } from "react-router-dom";
import { categories } from "../../routes/routings";

function Entartainment() {
  return (
    <div>
      <div className="Homeholder service">
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
        <Reusable video={'P9-ttmPqMSk'}></Reusable>
        <Reusable video={'PAGzNTCJ1lw'}></Reusable>
        <Reusable video={'Q0zzZ9sPWjs'}></Reusable>
        <Reusable video={'HYXIzk8QE-I'}></Reusable>
        <Reusable video={'2EO5jLUAqkQ'}></Reusable>
      </div>
    </div>
  );
}

export default Entartainment;
