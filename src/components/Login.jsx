import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSign, setIsSign] = useState(true);

  const toggleSigninSingup = () => {
    setIsSign(!isSign);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg   "
          alt="Background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <form className="bg-black absolute w-4/12 mx-auto p-10 my-36 right-0 left-0 text-white ">
        <h1 className="font-bold text-3xl m-2">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isSign && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-3 m-2 w-full  bg-gray-600 rounded"
          />
        )}
        <input
          type="text"
          placeholder="Enter Email/Phone"
          className="p-3 m-2 w-full  bg-gray-600 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="p-3 m-2 w-full bg-gray-600 rounded"
        />

        <button className="p-2 m-2  my-4 w-full bg-red-600 rounded">
          {isSign ? "Sign In" : "Sign Up"}
        </button>
        {isSign && (
          <p className="m-2 text-center cursor-pointer hover:underline">
            Forgot Password?
          </p>
        )}
        <p className="m-2 text-gray-400">
          {isSign ? "New to Netflix?" : "Already Registered?"}
          <span
            className="text-white font-medium ml-1 cursor-pointer hover:underline"
            onClick={toggleSigninSingup}
          >
            {isSign ? "Sign up now." : "Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
