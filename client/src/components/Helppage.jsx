import React from "react";
import "./styles/home.css";
function Helppage() {
  return (
    <div className="helpback_ground mt-5">
      <div className="helpconatiner">
        <div className="helpinfo">
          <h1>
            <span className="cutom2">Request</span> for a call back{" "}
          </h1>
        </div>
        <div className="helpform">
          <form
            action=""
            className=" cutomform   w-64 sm:w-80  shadow-2xl rounded-lg p-3 pr-5 block "
          >

            <textarea
              name=""
             
              className="custominput  w-full outline-none rounded py-1 px-1"
              placeholder="how can we help you?"
            >
             
           
            </textarea>
            <label htmlFor="" className=" text-white  pt-8" >your name</label>
            <input
              type="text"
              placeholder="Your Name"
              className=" custominput w-full px-2 py-2 rounded  focus:outline-none border focus: border-green-600"
            />
            <label htmlFor="" className=" text-white  pt-8">your email adress</label>
            <input
              type="text"
              placeholder="Your E-mail Address"
              className=" custominput w-full px-2 py-2 rounded  focus:outline-none border focus: border-green-600"
            />
            <button type="submit" className="  py-2 w-36 text-center mt-4 rounded bg-green-500 text-white hover:bg-green-700 transition "> submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Helppage;
