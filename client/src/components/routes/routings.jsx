import Aboutus from "../Aboutus";
import Contactus from "../Contactus";
import Home from "../Home";
import Kingstv from "../Kingstv";
import Pagenotfound from "../Pagenotfound";
import Patners from "../Patners";
import Programs from "../Programs";
import Services from "../Services";
import Allaboutyou from "../forms/Allaboutyou";
import Create_a_plan from "../forms/Create_a_plan";
import Findyourcommunity from "../forms/Findyourcommunity";
import Icanhelp from "../forms/Icanhelp";
import Ineedhelp from "../forms/Ineedhelp";
import Mentoring_portoals from "../forms/Mentoring_portoals";
import Shareyourexperince from "../forms/Shareyourexperince";
import Agriculture from "../kingstvFolder/videos/Agriculture";
import Bussines from "../kingstvFolder/videos/Bussines";
import Education from "../kingstvFolder/videos/Education";
import Entartainment from "../kingstvFolder/videos/Entartainment";
import Health from "../kingstvFolder/videos/Health";
import Hospitality from "../kingstvFolder/videos/Hospitality";
import Tech from "../kingstvFolder/videos/Tech";

let routings = [
  {
    path: "/",
    element: <Home></Home>,
    pathName: "home",
  },
  {
    path: "/kingstv",
    pathName: "kingstv",
    element: <Kingstv></Kingstv>,
  },

  {
    path: "/services",
    pathName: "services",
    element: <Services></Services>,
  },
  {
    path: "/programs",
    pathName: "Programs",
    element: <Programs></Programs>,
  },
  {
    path: "/partners",
    pathName: "partners",
    element: <Patners></Patners>,
  },
  {
    path: "/aboutus",
    pathName: "about us",
    element: <Aboutus></Aboutus>,
  },
  ,
  {
    path: "/contactus",
    pathName: "contact us",
    element: <Contactus></Contactus>,
  },
  {
    path: "/hospitality",
    pathName: "Hospitality",
    element: <Hospitality></Hospitality>,
  },
  {
    path: "/Agriculture",
    pathName: "Agriculture  ",
    element: <Agriculture></Agriculture>,
  },
  {
    path: "/Bussines",
    pathName: "Bussiness  ",
    element: <Bussines></Bussines>,
  
  },
  {
    path: "/entertainment",
    pathName: "Entertainment and Recreation   ",
    element:<Entartainment></Entartainment>,
  },
  {
    path: "/tech_world",
    pathName: "world of Tech   ",
    element:<Tech></Tech>,
  },
  {
    path: "/healthcare",
    pathName: "Health care  ",
    element:<Health></Health>
  },
  {
    path: "/education",
    pathName: "Education ",
    element:<Education></Education>
  },
  {
    path: "/i_need help",
    pathName: "Education ",
    element:<Ineedhelp></Ineedhelp>
  },
  {
    path: "/i_can_help",
    pathName: "Education ",
    element:<Icanhelp></Icanhelp>
  },
  {
    path: "/mentoringportals",
    pathName: "Education ",
    element:<Mentoring_portoals></Mentoring_portoals>
  },
  {
    path: "/all_about_you",
    pathName: "Education ",
    element:<Allaboutyou></Allaboutyou>
  },
  {
    path: "/share_your_experince",
    pathName: "Education ",
    element:<Shareyourexperince></Shareyourexperince>
  },
  {
    path: "/find_community",
    pathName: "Education ",
    element:<Findyourcommunity></Findyourcommunity>
  },
  {
    path: "/create_a_plan",
    pathName: "Education ",
    element:<Create_a_plan></Create_a_plan>
  },

  {
    path: "*",
    element: <Pagenotfound></Pagenotfound>,
  },
];
export default routings;
export let general = [
  {
    path: "/",
    element: <Home></Home>,
    pathName: "home",
  },
  {
    path: "/kingstv",
    pathName: "kingstv",
    element: <Kingstv></Kingstv>,
  },

  {
    path: "/services",
    pathName: "services",
    element: <Services></Services>,
  },
  {
    path: "/programs",
    pathName: "Programs",
    element: <Programs></Programs>,
  },
  {
    path: "/partners",
    pathName: "partners",
    element: <Patners></Patners>,
  },
  {
    path: "/aboutus",
    pathName: "about us",
    element: <Aboutus></Aboutus>,
  },
  ,
  {
    path: "/contactus",
    pathName: "contact us",
    element: <Contactus></Contactus>,
  },

  {
    path: "*",
    element: <Pagenotfound></Pagenotfound>,
  },
];
export let categories = [
  {
    path: "/hospitality",
    pathName: "Hospitality",
    
  },
  {
    path: "/Agriculture",
    pathName: "Agriculture  ",
  
  },
  {
    path: "/Bussines",
    pathName: "Bussiness  ",
    
  },
  {
    path: "/entertainment",
    pathName: "Entertainment and Recreation   ",
   
  },
  {
    path: "/tech_world",
    pathName: "world of Tech   ",
 
  },
  {
    path: "/healthcare",
    pathName: "Health care  ",
    
  },
  {
    path: "/education",
    pathName: "Education ",
   
  },
];
