import React from "react";
import { Navigation } from "./Navigation";
import "./styles/home.css";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
function Programs() {
  return (
    <div>
      <div className="Homeholder service">
        <Navigation></Navigation>
      </div>
      <h1 className=" text-2xl pt-2 pl-3 font-bold ">Our Programs</h1>
      <h2>SERVICES & BENEFITS MINISTERS & MERCHANTS</h2>
      <div className="srvicecontainer">
        <div className="srvicecard srvicecard2">
          <div className="serviceIcon">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
          <h1 className=" text-lg font-semibold text-cyan-700">
            Do you have an idea for a book. Please click the link below and
            register for our free writing your book software:
          </h1>
          <p>
            <NavLink to={"https://wyb.compassaimsolutions.com/"} target="blank">
              https://wyb.compassaimsolutions.com/
            </NavLink>
          </p>
          <p>
            <NavLink to={"https://wyb.compassaimsolutions.com/register"}>
              wyb.compassaimsolutions.com/register
            </NavLink>
          </p>
        </div>
        <div className="srvicecard srvicecard2">
          <div className="serviceIcon">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
          <h1 className=" text-lg font-semibold text-cyan-700">
          Do you have an idea for a business or have an existing business. Please click the link below and register for our free business planning software:
          </h1>
          <p>
            <NavLink to={"https://businessplan1.compassaimsolutions.com/"} target="blank">
            businessplan1.compassaimsolutions.com/
            </NavLink>
          </p>
          <p>
            <NavLink to={"https://businessplan1.compassaimsolutions.com/register"}>
            businessplan1.compassaimsolutions.com/register
            </NavLink>
          </p>
        </div>
        <div className="srvicecard srvicecard2">
          <div className="serviceIcon">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
          <h1 className=" text-lg font-semibold text-cyan-700">
          Want to map out your life and plan out an entire year of your life?
          </h1>
          <p>
            <NavLink to={"http://www.my-lifequest.com"} target="blank">
            www.my-lifequest.com
            </NavLink>
          </p>
          <p>
            <NavLink to={"http://www.my-lifequest.com/register"}>
            www.my-lifequest.com/register
            </NavLink>
          </p>
        </div>
        <div className="srvicecard srvicecard2">
          <div className="serviceIcon">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
          <h1 className=" text-lg font-semibold text-cyan-700">
          Improving your life daily with the DayWheel
          </h1>
          <p>
            <NavLink to={"http://mydaywheel.com/"} target="blank">
            mydaywheel.com/
            </NavLink>
          </p>
          
        </div>
        <div className="srvicecard srvicecard2">
          <div className="serviceIcon">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
          <h1 className=" text-lg font-semibold text-cyan-700">
          Business and Community Development
          </h1>
          <p>
            <NavLink to={"http://www.compassaim.com/"} target="blank">
           www.compassaim.com/
            </NavLink>
          </p>
         
        </div>
        <div className="srvicecard srvicecard2">
          <div className="serviceIcon">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
          <h1 className=" text-lg font-semibold text-cyan-700">
          Relationship/Dating Compatibility Contract (Full Version Coming Soon)
          </h1>
          <p>
            <NavLink to={"http://lovecontract.compassaimsolutions.com/"} target="blank">
           lovecontract.compassaimsolutions.com/
            </NavLink>
          </p>
          <p>
            <NavLink to={"https://businessplan1.compassaimsolutions.com/register"}>
           businessplan1.compassaimsolutions.com/register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
