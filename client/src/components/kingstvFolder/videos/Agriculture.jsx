import React from "react";
import { Navigation } from "../../Navigation";
import Footer from "../../Footer";
import Reusable from "../Reusable";
import { NavLink } from "react-router-dom";
import { categories } from "../../routes/routings";
function Agriculture() {
  return (
    <div>
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
      <div className="secondHomecontainer kingstv">
        <Reusable video={'ljV8Fjjc7-A'}></Reusable>
        <Reusable video={'Cxbdwsy88V4'}></Reusable>
        <Reusable video={'vFE-ZNf42i0'}></Reusable>
        <Reusable video={'tboq4_fCLw0'}></Reusable>
        <Reusable video={'QE0Nn6Qx72Q'}></Reusable>
      </div>
    </div>
  );
}

export default Agriculture;
