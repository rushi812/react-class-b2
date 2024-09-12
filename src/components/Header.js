import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [reactBtnText, setReactBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);

  return (
    <div className="flex justify-between items-center bg-orange-100 shadow-lg sm:bg-green-100 md:bg-pink-100 lg:bg-red-100">
      <img
        src="https://img.freepik.com/free-vector/flat-design-antojitos-logo-design-template_23-2149599172.jpg"
        className="w-36"
      />
      <ul className="flex items-center mr-5">
        <li className="px-2">Online: {onlineStatus === true ? "🟢" : "🔴"}</li>
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2">
          <Link to="/about">About</Link>
        </li>
        <li className="px-2">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-2">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-2 font-bold text-xl">
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>
        <li className="px-2">
          <button
            className="bg-orange-400 px-2 py-1 rounded-md"
            onClick={() => {
              if (reactBtnText === "Login") {
                setReactBtnText("Logout");
              } else {
                setReactBtnText("Login");
              }
            }}
          >
            {reactBtnText}
          </button>
        </li>

        <li className="px-2 font-bold text-xl text-red-700">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
