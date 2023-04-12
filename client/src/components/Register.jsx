import React from "react";
import { useState } from "react";
import "./styles/home.css";
function Register() {
  const [userdetails, setuserdetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handlesubmit(e) {
    e.preventDefault();
    console.log(userdetails);
    setuserdetails({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className=" h-screen bg-slate-50 flex items-center justify-center flex-col">
      <h1>Financial </h1>
      <form
        action=""
        className=" bg-orange-200 w-64 p-2 min-h-max  rounded shadow-lg flex flex-wrap gap-5"
        onSubmit={handlesubmit}
      >
        <p>
          <input
            className=" rounded px-2 "
            placeholder="name"
            type="checkbox"
            onChange={(e) => {
              setuserdetails({ ...userdetails, password: e.target.value });
            }}
            value={userdetails.password}
          />
          who Am I ?
        </p>
        <p>
          <input
            className=" rounded px-2 "
            placeholder="name"
            type="checkbox"
            onChange={(e) => {
              setuserdetails({ ...userdetails, password: e.target.value });
            }}
            value={userdetails.password}
          />
          who Am I ?
        </p>
        <p>
          <input
            className=" rounded px-2 "
            placeholder="name"
            type="checkbox"
            onChange={(e) => {
              setuserdetails({ ...userdetails, password: e.target.value });
            }}
            value={userdetails.password}
          />
          who Am I ?
        </p>
        <p>
          <input
            className=" rounded px-2 "
            placeholder="name"
            type="checkbox"
            onChange={(e) => {
              setuserdetails({ ...userdetails, password: e.target.value });
            }}
            value={userdetails.password}
          />
          who Am I ?
        </p>
        <p>
          <input
            className=" rounded px-2 "
            placeholder="name"
            type="checkbox"
            onChange={(e) => {
              setuserdetails({ ...userdetails, password: e.target.value });
            }}
            value={userdetails.password}
          />
          who Am I ?
        </p>
        <p>
          <input
            className=" rounded px-2 "
            placeholder="name"
            type="checkbox"
            onChange={(e) => {
              setuserdetails({ ...userdetails, password: e.target.value });
            }}
            value={userdetails.password}
          />
          who Am I ?
        </p>
        <p>
          <input
            className=" rounded px-2 "
            placeholder="name"
            type="checkbox"
            onChange={(e) => {
              setuserdetails({ ...userdetails, password: e.target.value });
            }}
            value={userdetails.password}
          />
          who Am I ?
        </p>
        <button
          type="submit"
          className=" bg-cyan-700 text-white py-1 rounded shadow-lg w-full"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Register;
