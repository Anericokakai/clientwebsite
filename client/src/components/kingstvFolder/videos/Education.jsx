import React from "react";
import { Navigation } from "../../Navigation";
import Footer from "../../Footer";
import Reusable from "../Reusable";
import { NavLink } from "react-router-dom";
import { categories } from "../../routes/routings";

function Education() {
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
        <Reusable video={"829ZZcVN-cE"}></Reusable>
        <Reusable video={"mdhngx3YV9g"}></Reusable>
        <Reusable video={"XovcR_3xBDY"}></Reusable>
        <Reusable video={"rGML8sZtVp8"}></Reusable>
        <Reusable video={"clLaMEDgfEU"}></Reusable>
        <Reusable video={"39ILoDWK-P4"}></Reusable>
        <Reusable video={"RjzC-8-P8DY"}></Reusable>
        <Reusable video={"u4dc1axRwE4"}></Reusable>
        <Reusable video={"X1hmzkXtCwA"}></Reusable>
        <Reusable video={"W6PQS-1h8CE"}></Reusable>
        <Reusable video={"bYDG8GvRN0I"}></Reusable>
        <Reusable video={"aOZWMfMHFR0"}></Reusable>
        <Reusable video={"GhpevvR5qeU"}></Reusable>
        <Reusable video={"JaaI3eXDR44"}></Reusable>
        <Reusable video={"xKHbkLipnNc"}></Reusable>
        <Reusable video={"k_LmRcr8Mm4"}></Reusable>
        <Reusable video={"GxT_eNexR8M"}></Reusable>
        <Reusable video={"BE-x2GR6Zzc"}></Reusable>
        <Reusable video={"oWevEpxqqhY"}></Reusable>

      </div>
    </div>
  );
}


export default Education;
