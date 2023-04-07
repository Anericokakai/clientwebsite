import React from "react";
import "./styles/home.css";
import { Navigation } from "./Navigation";
import logo from "./images/logob.png";
import SecondHome from "./Homecomponets/SecondHome";
import Helppage from "./Helppage";
import Footer from "./Footer";
import i1b from "../components/images/1b.jpg";
import i2b from "../components/images/2b.jpg";
import i3b from "../components/images/3b.jpg";
import i4b from "../components/images/4b.png";
import i5b from "../components/images/6a.jpg";
import i6b from "../components/images/6b.jpg";
import i7b from "../components/images/7b.jpg";
import i8b from "../components/images/8b.jpg";

function Home() {
  let card1 = "Creating A Plan";
  let card2 = "Find Your Community";
  let card3 = " I Can Help";
  let card4 = " All About You ";
  let card5 = " Share My Experiences ";
  let card6 = "I Need Help [Resources]";
  let card7 = " Mentoring Portals";
  let card8 = "Edutainment, Culture & Lifestyle";
  return (
    <div>
      <div className="Homeholder">
        <div className="homenav">

       
        <Navigation></Navigation>
        </div >
        <div className="homecontainer">
          <div></div>
          <p className="moto">
            "Streets & Portals of Life, Hope, and the Way Home"
          </p>
        </div>
      </div>
      <div>
        <div className="secondHomecontainer2">
          <SecondHome image={i5b} card={card4} link={'/all_about_you'}></SecondHome>
          <SecondHome image={i6b} card={card5} link={'/share_your_experince'}></SecondHome>
          <SecondHome image={i2b} card={card2} link={'/find_community'}></SecondHome>
          <SecondHome image={i3b} card={card3} link={'/i_can_help'}></SecondHome>
          <SecondHome image={i1b} card={card1} link={'/create_a_plan'}></SecondHome>
          <SecondHome image={i8b} card={card8} link={'/entertainment'}></SecondHome>
          <SecondHome image={i7b} card={card6} link={'/i_need help'}></SecondHome>
          <SecondHome image={i4b} card={card7} link={'/mentoringportals'}></SecondHome>
        </div>
      </div>
      <Helppage></Helppage>
      <Footer></Footer>
    </div>
  );
}

export default Home;
