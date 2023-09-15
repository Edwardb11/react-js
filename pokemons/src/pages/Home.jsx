import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      Hello
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
