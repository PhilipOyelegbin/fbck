import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  const route = useLocation();

  return (
    <nav className='flex items-center justify-between py-2 px-5 lg:px-20 shadow-md relative'>
      <Link to='/'>
        <img src={logo} className='w-10 md:w-14 aspect-square' alt='logo' />
      </Link>
      <Link
        to={
          route.pathname === "/login"
            ? "/register"
            : route.pathname === "/register" && "/login"
        }
        className='underline text-xl hover:text-blue-500 ease-linear duration-300'>
        {route.pathname === "/login"
          ? "Register"
          : route.pathname === "/register" && "Login"}
      </Link>
    </nav>
  );
};
