import React from "react";
import { Navigation } from "../../Navigation";
import Footer from "../../Footer";
import Reusable from "../Reusable";
import { categories } from "../../routes/routings";
import { NavLink } from "react-router-dom";

function Tech() {
  return (
    <div>
      <div className="Homeholder ">
        <Navigation></Navigation>
      </div>
      <div className="flex justify-between items-center min-h-20 px-4 pt-2">
        <h1 className=" kingshome_title font-bold text-3xl   ">kings tv</h1>
        <div class="dropdown">
          <button class="dropbtn shadow-xl">More categories on Kings tv</button>
          <div class="dropdown-content">
            {categories.map((value, i) => (
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "dormant")}
                to={value.path}
                key={i}
              >
                {value.pathName}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="secondHomecontainer ">
        <Reusable video={"agmfULyUFjY"}></Reusable>
        <Reusable video={"4lzyzzXvCOk"}></Reusable>
        <Reusable video={"tH29OK0SVFk"}></Reusable>
        <Reusable video={"2v_K_oLFCyA"}></Reusable>
        <Reusable video={"gHWjHBNUedM"}></Reusable>
        <Reusable video="y_xAPRAO43A"></Reusable>
        
        <Reusable video="hsB6EWNUcyY"></Reusable>
        <Reusable video="1sk1Q3-aH1M"></Reusable>
        <Reusable video="7DaZbS-ilV0"></Reusable>
        <Reusable video="AdjRjBwhhfQ"></Reusable>
        <Reusable video="8CYijp-W59Y"></Reusable>
        <Reusable video="MV4Nq1GaIAA"></Reusable>
        <Reusable video="i0SdedFZgP8"></Reusable>

      </div>
    </div>
  );
}

export default Tech;
