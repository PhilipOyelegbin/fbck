import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menu = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Gallery", url: "/gallery" },
    // { label: "Contact", url: "/contact" },
  ];

  return (
    <nav className='flex items-center justify-between py-2 px-5 md:px-20 shadow-md relative'>
      <img src={logo} className='w-10 md:w-14 aspect-square' alt='logo' />

      <FaAlignJustify
        className='md:hidden cursor-pointer h-6 w-6 text-blue-600'
        onClick={() => setToggleMenu(!toggleMenu)}
      />

      <ul
        className={`${
          toggleMenu ? "right-0" : "-right-full"
        } fixed z-20 bg-white md:bg-transparent md:static top-0 p-5 flex flex-col md:flex-row items-start gap-3 w-full md:items-center md:w-auto ease-in-out duration-300`}>
        {menu.map((item) => (
          <li
            key={item.url}
            className='py-2 px-3 text-[18px] flex gap-3 items-center'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700"
                  : "hover:text-blue-500 ease-linear duration-300"
              }
              to={item.url}
              onClick={() => setToggleMenu(!toggleMenu)}>
              {item.label}
            </NavLink>
          </li>
        ))}
        <Link to='/login' className='btn max-w-fit'>
          Go To Ballot
        </Link>
        <FaTimes
          className='mx-auto md:hidden cursor-pointer h-6 w-6 text-blue-600'
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      </ul>
    </nav>
  );
}
