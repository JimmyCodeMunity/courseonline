import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { AlignLeft, X } from "react-feather";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [logstate, setLogstate] = useState("");

  const getLoginState = () => {
    const authenticated = localStorage.getItem("Authenticated");
    if (authenticated) {
      setLogstate("loggedin");
    } else {
      setLogstate("");
    }
  };

  useEffect(() => {
    getLoginState();
  }, []);

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200
        ? setStickyClass(
            "fixed flex-1 navbar top-0 left-0 z-50 bg-white smooth sm:px-20 px-6"
          )
        : setStickyClass("relative");
    }
  };

  const handleLogout = () => {
    // Perform logout actions, such as clearing token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("Authenticated");
    localStorage.removeItem("email");
    localStorage.removeItem("quid");
    setLogstate("");
    navigate("/login");
  };

  const [toggle, setToggle] = useState(false);

  return (
    <nav
      id="navbar"
      className={`top-0 flex-1 sm:py-6 py-6 sm:px-6 flex justify-between items-center navbar fixed start-0 z-50 w-full ${stickyClass}`}
    >
      <div className="flex-row space-x-3 flex justify-between items-center">
        <h1 className="text-[30px] font-semibold font-poppins text-black">
          <span className="text-yellow-600">Coursell</span>
        </h1>
      </div>

      <ul className="list-none items-center hidden md:flex justify-end flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px]
          ${index == navLinks.length - 1 ? "mr-0" : "mr-10"} text-black mr-10
          `}
          >
            <Link
              to={`${nav.path}`}
              className="text-black font-normal px-3 py-2 rounded-md text-sm"
            >
              {nav.name}
            </Link>
          </li>
        ))}
        {logstate ? (
          <li
            onClick={handleLogout}
            className="bg-yellow-600 rounded-2xl py-1 px-6 text-black list-none items-center cursor-pointer"
          >
            Logout
          </li>
        ) : (
          <li className="bg-yellow-600 rounded-2xl py-1 px-6 text-black list-none items-center">
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>

      <div className="md:hidden justify-end items-center flex">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer"
        >
          {toggle ? <X color="black" size={30} /> : <AlignLeft color="black" size={30} />}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-white shadow shadow-2xl shadow-slate-600 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none items-center flex flex-col justify-end flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-black mr-10`}
              >
                <Link to={`${nav.path}`}>{nav.name}</Link>
              </li>
            ))}

            {logstate ? (
              <li
                onClick={handleLogout}
                className="bg-yellow-600 text-white rounded-2xl py-1 px-6 text-black list-none items-center cursor-pointer mt-4"
              >
                Logout
              </li>
            ) : (
              <li className="bg-yellow-600 text-white rounded-2xl py-1 px-6 text-black list-none items-center mt-4">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
