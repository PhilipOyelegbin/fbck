import { Link, useLocation } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import admin from "../../../assets/male.jpg";

export const Header = ({ handleToggle }) => {
  const path = useLocation();
  const headerTitle = path.pathname.split("/").splice(1, 2);

  return (
    <header className='flex justify-between items-center p-5 shadow-md'>
      <FaAlignJustify
        className='cursor-pointer text-blue-500'
        onClick={handleToggle}
      />
      <h3>
        {headerTitle.length < 2 ? "DASHBOARD" : headerTitle[1].toUpperCase()}
      </h3>
      <Link to='/panel/profile'>
        <img
          src={admin}
          className='w-10 border-2 border-blue-500 aspect-square rounded-full'
          alt='avatar'
        />
      </Link>
    </header>
  );
};
