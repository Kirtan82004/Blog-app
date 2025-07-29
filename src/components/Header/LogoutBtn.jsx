import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="px-5 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-500 transition duration-200"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
