
import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    // Handle form submission logic here
    console.log({ email, password });
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-t-[30px] p-8 md:p-20">
      <div className="text-black text-center mt-24 md:mt-10 text-4xl md:text-5xl font-habibi leading-tight">
        Welcome back!
      </div>
      <div className="text-black/80 text-center mt-12 md:mt-10 text-xl md:text-3xl font-habibi leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </div>
      <div className="border border-black/50 bg-white flex flex-col items-start w-full max-w-3xl p-8 mt-12 md:mt-10">
        <div className="text-black text-2xl font-habibi mb-4">
          Log into your account:
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <input
              className="w-full border border-black/50 p-4 text-black/80 placeholder-gray-500"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full border border-black/50 p-4 text-black/80 placeholder-gray-500"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center mb-4">
            <button className="bg-red-600 text-white py-2 px-8 rounded-md font-habibi">
              Login
            </button>
          </div>
          <div className="text-red-600 text-center font-habibi">
            Forgot password?
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
