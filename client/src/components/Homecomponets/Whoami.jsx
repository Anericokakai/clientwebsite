import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/home.css";

import axios from "axios";
function Whoami() {
  const [userdetails, setuserdetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  async function handlesubmit(e) {
    e.preventDefault();

    fetch("/api", {
      method: "post",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        setuserdetails({
          name: "",
          email: "",
          password: "",
        });
      });
  }

  return (
    <div>
      <div className=" h-screen bg-slate-50 flex items-center justify-center flex-col">
        <h1>registration form</h1>
        <form action="" className=" bg-orange-200" onSubmit={handlesubmit}>
          <input
            className=" rounded px-2 "
            onChange={(e) => {
              setuserdetails({ ...userdetails, name: e.target.value });
            }}
            placeholder="name"
            type="text"
            value={userdetails.name}
          />
          <input
            className=" rounded px-2 "
            onChange={(e) => {
              setuserdetails({ ...userdetails, email: e.target.value });
            }}
            placeholder="email"
            type="email"
            value={userdetails.email}
          />
          <input
            className=" rounded px-2 "
            placeholder="password"
            type="password"
            onChange={(e) => {
              setuserdetails({ ...userdetails, password: e.target.value });
            }}
            value={userdetails.password}
          />
          <button
            type="submit"
            className=" bg-cyan-700 text-white py-1 rounded shadow-lg"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Whoami;
