import React, { useState } from "react";
import "./login.css";
const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen bg-image bg-cover bg-center bg-no-repeat w-screen items-center justify-center">
      <div className="border-2 border-purple-600 p-40 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="outline-none bg-transparent border-2 border-purple-600 font-medium rounded-full py-2 px-6 text-lg placeholder:text-white"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="outline-none mt-3 bg-transparent border-2 border-purple-600 font-medium rounded-full py-2 px-6 text-lg placeholder:text-white"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="outline-none mt-7 border-none hover:bg-purple-800 cursor-pointer font-semibold bg-purple-700 rounded-full py-2 px-8 w-full text-lg placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
