import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "../assets/Full-Logo.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("enrolled");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="h-[70px] flex items-center border-b-2 border-b-blue-500 bg-white/70 backdrop-blur-sm sticky top-0 z-50">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[70px] w-auto" />
        </Link>

        {/* Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }
          >
            Profile
          </NavLink>
        </nav>

        {/* Login/Profile */}
        <div className="flex items-center gap-4">
          {user ? (
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              {/* <span className="text-sm text-gray-700">{user.name}</span> */}
              {/* <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLogout();
                }}
                className="text-xs text-red-500 mt-1 hover:underline"
              >
                Logout
              </button> */}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;