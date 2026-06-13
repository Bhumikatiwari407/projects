import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import React from 'react'

const Header = () => {
  return (
    <>
      
      <div className="bg-danger-subtle  d-flex justify-content-between align-item-center">
        <nav className="bg-orange-600 flex items-center justify-between px-16 py-4">
          <div className=" bg-orange-600 text-white text-4xl font-bold">
            crav<span className="text-orange-400">i</span>ng
          </div>

          <div className="flex items-center gap-6">
            <Link to={"/login"}>
            <button className="text-white text-lg font-medium hover:text-orange-300 transition">
              Login
            </button>
            </Link>
            
            <Link to={"/register"}>
            <button className="bg-white text-orange-600 px-6 py-2 rounded font-medium hover:bg-gray-100 transition">
              Register
            </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
