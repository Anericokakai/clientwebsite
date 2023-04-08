import React from "react";
import { Navigation } from "../../Navigation";
import Footer from "../../Footer";
import Reusable from "../Reusable";
import { categories } from "../../routes/routings";
import { NavLink } from "react-router-dom";

function Bussines() {
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
        <Reusable video={"dw27wu4oVZ0"}></Reusable>
        <Reusable video={"dvqEk10YHsM"}></Reusable>
        <Reusable video={"BjLSgdpnmo8"}></Reusable>
        <Reusable video={"_1hdmagFPR4"}></Reusable>
        <Reusable video={"o-SkfWcGhOY"}></Reusable>
        <Reusable video="xC_IyotuXiU"></Reusable>

        <Reusable video="0w3o8uHVkKQ"></Reusable>
        <Reusable video="L50TfGlZD84"></Reusable>
        <Reusable video="uhaTI6HYZDk"></Reusable>
        <Reusable video="FGVQqavsCj8"></Reusable>
        <Reusable video="ch0wwdRri3o"></Reusable>
        <Reusable video="BDiYMf_7_oA"></Reusable>
      </div>
    </div>
  );
}

export default Bussines;
