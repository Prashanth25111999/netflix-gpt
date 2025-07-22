import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSign, setIsSign] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSigninSingup = () => {
    setIsSign(!isSign);
  };

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleButtonClick = () => {
    const nameValue = name?.current?.value;
    const message = validateData(
      email?.current?.value,
      password?.current?.value,
      isSign ? null : nameValue
    );
    setErrorMsg(message);
    if (errorMsg) return;
    if (!isSign) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/131374889?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute w-4/12 mx-auto p-10 my-36 right-0 left-0 text-white "
      >
        <h1 className="font-bold text-3xl m-2">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isSign && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-3 m-2 w-full  bg-gray-600 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Email/Phone"
          className="p-3 m-2 w-full  bg-gray-600 rounded"
        />
        <input
          ref={password}
          type="password"
          name="password"
          placeholder="Enter Password"
          className="p-3 m-2 w-full bg-gray-600 rounded"
        />
        {errorMsg && (
          <p className="p-3 m-2 text-red-700 text-bold">{errorMsg}</p>
        )}
        <button
          className="p-2 m-2  my-4 w-full bg-red-600 rounded"
          onClick={handleButtonClick}
        >
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
