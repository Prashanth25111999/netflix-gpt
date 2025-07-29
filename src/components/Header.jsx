import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
  const photoURL = useSelector((state) => state?.user?.user?.photoURL);
  const name = useSelector((state) => state?.user?.user?.displayName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleRemoveUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const hideLocation = location.pathname === "/";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between ">
      <img src={HEADER_LOGO} alt="Header Logo" className="w-48 ml-24 my-1 " />
      {!hideLocation && name && (
        <div className="flex p-2 mr-5">
          <img src={photoURL} alt="User Logo" className="w-8 h-8 my-5" />
          <button onClick={handleRemoveUser} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
