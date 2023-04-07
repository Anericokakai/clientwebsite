import React from "react";
import "./styles/home.css";
import { Navigation } from "./Navigation";
import logo from "./images/logob.png";
import SecondHome from "./Homecomponets/SecondHome";
import Helppage from "./Helppage";
import Footer from "./Footer";
import i1b from "../components/images/1b.jpg";
import i2b from "../components/images/2b.jpg";
import i3b from "../components/images/1c.jpg";
import i4b from "../components/images/4b.png";
import i5b from "../components/images/6a.jpg";
import i6b from "../components/images/6b.jpg";
import i7b from "../components/images/7b.jpg";
import i8b from "../components/images/8b.jpg";
import { Link, NavLink } from "react-router-dom";

function Home() {
  let card1 = "Creating A Plan";
  let card2 = "Find Your Community";
  let card3 = " I Can Help";
  let card4 = "Who Am I? Change Your Life ";
  let card5 = " Share My Experiences ";
  let card6 = "I Need Help [Resources]";
  let card7 = " Mentoring Portals";
  let card8 = "Edutainment, Culture & Lifestyle";
  return (
    <div>
      <div className="Homeholder">
        <div className="homenav">
          <Navigation></Navigation>
        </div>
        <div className="homecontainer">
          <div className="luther"></div>
          <div className="motocont">
            <h1 className=" text-amber-500">KingStreet</h1>
            <p className="moto">
              "Streets & Portals of Life, Hope, and the Way Home"
            </p>
            <div className=" flex gap-3">
              <NavLink to={"https://www.my-lifequest.com/login"} target="blank">
                <button className=" text-white bg-cyan-700 py-1 px-4 rounded mt-3 shadow-xl cursor-pointer hover:bg-cyan-800">
                  Login
                </button>
              </NavLink>
              <button className=" text-white bg-cyan-700 py-1 px-4 rounded mt-3 shadow-xl cursor-pointer hover:bg-cyan-800">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="secondHomecontainer2">
          <SecondHome
            image={i3b}
            card={card4}
            link={"https://www.my-lifequest.com/login"}
          ></SecondHome>
              <SecondHome
            image={i2b}
            card={card2}
            link={"http://www.compassaim.com/"}
          ></SecondHome>
              <SecondHome
            image={i5b}
            card={card3}
            link={"https://www.my-lifequest.com/login"}
          ></SecondHome>


          <SecondHome
            image={i6b}
            card={card5}
            link={"https://wyb.compassaimsolutions.com/"}
          ></SecondHome>
       <SecondHome
            image={i8b}
            card={card8}
            link={"/entertainment"}
          ></SecondHome>
      
          <SecondHome
            image={i1b}
            card={card1}
            link={"http://mydaywheel.com/"}
          ></SecondHome>
         
          <SecondHome
            image={i7b}
            card={card6}
            link={"https://www.my-lifequest.com/login"}
          ></SecondHome>
          <SecondHome
            image={i4b}
            card={card7}
            link={"http://www.compassaim.com/"}
          ></SecondHome>
        </div>
      </div>
      
      <Helppage></Helppage>
     
      
      <Footer></Footer>
    </div>
  );
}

export default Home;
