import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const photoURL = useSelector((state) => state?.user?.user?.photoURL);
  const name = useSelector((state) => state?.user?.user?.displayName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleRemoveUser = () => {
    dispatch(removeUser());
    navigate("/");
  };
  const hideLocation = location.pathname === "/";
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between ">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Header Logo"
        className="w-48 ml-24 my-1 "
      />
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
