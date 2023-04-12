import React from "react";
import { useState } from "react";
function Login() {
  const [userdetails, setuserdetails] = useState({
    email: "",
    password: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(userdetails);
    fetch("/userlogin", {
      method: "post",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdetails),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div>
      <div className=" h-screen bg-slate-50 flex items-center justify-center flex-col">
        <h1>login form</h1>
        <form action="" className=" bg-orange-200" onSubmit={handlesubmit}>
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

export default Login;
