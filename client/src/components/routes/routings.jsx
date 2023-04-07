import Aboutus from "../Aboutus";
import Contactus from "../Contactus";
import Home from "../Home";
import Kingstv from "../Kingstv";
import Pagenotfound from "../Pagenotfound";

import Programs from "../Programs";
import Services from "../Services";




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
