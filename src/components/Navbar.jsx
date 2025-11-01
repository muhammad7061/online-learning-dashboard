import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "../assets/Full-Logo.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // We listen to changes in localStorage implicitly here, 
    // but in a real app, a context/state manager is better for live updates.
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  // Helper function to get initials (First letter of first name and last name)
  const getUserInitials = (name) => {
    if (!name) return "";
    
    // Split the name by space and handle multiple spaces
    const nameParts = name.trim().split(/\s+/);
    let initials = nameParts[0].charAt(0).toUpperCase();

    // If there is more than one part, take the initial of the last part
    if (nameParts.length > 1) {
      initials += nameParts[nameParts.length - 1].charAt(0).toUpperCase();
    }
    return initials;
  };

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
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              {/* UPDATED: Use getUserInitials function here */}
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                {getUserInitials(user.name)}
              </div>
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
