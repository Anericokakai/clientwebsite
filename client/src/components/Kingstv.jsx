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

      {/* 39ILoDWK-P4
RjzC-8-P8DY
Pv4xWJHva3g
FZwbO1ANKIs
xzvklmoHO3M */}
      <h1 className="kingshome_title text-2xl font-bold pl-3">Health</h1>
      <div className=" kingstv pt-2">
        <Kingstvhome categories="health" video="39ILoDWK-P4"></Kingstvhome>

        <Kingstvhome categories="health" video="RjzC-8-P8DY"></Kingstvhome>
        <Kingstvhome categories="health" video="Pv4xWJHva3g"></Kingstvhome>
        <Kingstvhome categories="health" video="FZwbO1ANKIs"></Kingstvhome>
        <Kingstvhome categories="health" video="xzvklmoHO3M"></Kingstvhome>
        <Kingstvhome categories="health" video="xzvklmoHO3M"></Kingstvhome>
      </div>
      <h1 className="kingshome_title text-2xl font-bold pl-3">Tech support</h1>
      <div className=" kingstv">
        <Kingstvhome categories="Tech" video="y_xAPRAO43A"></Kingstvhome>

        <Kingstvhome categories="Tech" video="hsB6EWNUcyY"></Kingstvhome>
        <Kingstvhome categories="Tech" video="1sk1Q3-aH1M"></Kingstvhome>
        <Kingstvhome categories="Tech" video="7DaZbS-ilV0"></Kingstvhome>
        <Kingstvhome categories="Tech" video="AdjRjBwhhfQ"></Kingstvhome>
        <Kingstvhome categories="Tech" video="8CYijp-W59Y"></Kingstvhome>
      </div>
      <h1 className="kingshome_title text-2xl font-bold pl-3">Finance and Insurance</h1>
      <div className=" kingstv">
        <Kingstvhome categories="Finance and insurance" video="xC_IyotuXiU"></Kingstvhome>

        <Kingstvhome categories="Finance and insurance" video="0w3o8uHVkKQ"></Kingstvhome>
        <Kingstvhome categories="Finance and insurance" video="L50TfGlZD84"></Kingstvhome>
        <Kingstvhome categories="Finance and insurance" video="uhaTI6HYZDk"></Kingstvhome>
        <Kingstvhome categories="Finance and insurance" video="FGVQqavsCj8"></Kingstvhome>
        <Kingstvhome categories="Finance and insurance" video="ch0wwdRri3o"></Kingstvhome>
        <Kingstvhome categories="Finance and insurance" video="BDiYMf_7_oA"></Kingstvhome>
      </div>
      <h1 className="kingshome_title text-lg font-bold pl-3">Agriculture,Forestry,Fishing and Hunting</h1>
      <div className=" kingstv">
        <Kingstvhome categories="Agriculture" video="ljV8Fjjc7-A"></Kingstvhome>

        <Kingstvhome categories="Agriculture" video="Cxbdwsy88V4"></Kingstvhome>
        <Kingstvhome categories="Agriculture" video="vFE-ZNf42i0"></Kingstvhome>
        <Kingstvhome categories="Agriculture" video="tboq4_fCLw0"></Kingstvhome>
        <Kingstvhome categories="Agriculture" video="QE0Nn6Qx72Q"></Kingstvhome>
        <Kingstvhome categories="Agriculture" video="jT9eTn2qD38"></Kingstvhome>
        <Kingstvhome categories="Agriculture" video="oWwg5utv1zM"></Kingstvhome>
        <Kingstvhome categories="Agriculture" video="c3BjcFPxttQ"></Kingstvhome>
        <Kingstvhome categories="Agriculture" video="jN5DiMtVQio"></Kingstvhome>
        <Kingstvhome categories="Agriculture" video="Ig2xsAoF3ZA"></Kingstvhome>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Kingstv;
