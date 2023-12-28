import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../context/DarkMode";

const AutsLayouts = (props) => {
  const { children, title, type } = props;
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
 

  return (
    <div className={`flex justify-center  min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light" : "Dark"}
          </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium mb-8 text-slate-500">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm mt-3 text-center">
          {type === 'login' 
          ? "Don't have an account? " 
          : "have an account? " }

          {type === 'login' && (
            <Link to="/register" className="text-md font-bold hover:text-blue-600">
            Sign In
          </Link>
          )}

          {type === 'register' && (
            <Link to="/login" className="text-md font-bold hover:text-blue-600">
            Login
          </Link>
          )}
          
        </p>
      </div>
    </div>
  );
};

export default AutsLayouts;
