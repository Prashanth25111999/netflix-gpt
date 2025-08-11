import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { HEADER_LOGO, LANGUAGE_IDENTIFIER } from "../utils/constants";
import { addSearchValue } from "../store/slices/gptSlice";
import { addLanguage } from "../store/slices/langConfigSlice";

const Header = () => {
  const photoURL = useSelector((state) => state?.user?.user?.photoURL);
  const name = useSelector((state) => state?.user?.user?.displayName);
  const isGptSearch = useSelector((state) => state.gpt.isGptSearch);

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

  const handleGptSearch = () => {
    dispatch(addSearchValue());
  };

  const handleLanguage = (e) => {
    dispatch(addLanguage(e.target.value));
  };

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between ">
      <img src={HEADER_LOGO} alt="Header Logo" className="w-48 ml-24 my-1 " />
      {!hideLocation && name && (
        <div className="flex p-2 mr-5">
          {isGptSearch && (
            <select className="my-5 mr-2 px-2" onChange={handleLanguage}>
              {LANGUAGE_IDENTIFIER.map((identifier) => (
                <option
                  key={identifier.identifier}
                  value={identifier.identifier}
                  name={identifier.name}
                >
                  {identifier.name}
                </option>
              ))}
            </select>
          )}
          <div className="my-5">
            <button
              className="bg-purple-700 text-white px-3 mr-3 py-1  rounded"
              onClick={handleGptSearch}
            >
              {isGptSearch ? "Go to HomePage" : "GPT Search"}
            </button>
          </div>
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
