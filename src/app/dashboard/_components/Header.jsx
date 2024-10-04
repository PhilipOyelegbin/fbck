"use client";
import { usePathname } from "next/navigation";
import { FiMenu, FiUserCheck, FiUserX } from "react-icons/fi";

export default function Header({ toggle, setToggle }) {
  const path = usePathname();
  const headerTitle = path.split("/").splice(2);

  return (
    <header className='flex justify-between items-center p-5 bg-blue-900 text-2xl text-white'>
      <FiMenu onClick={() => setToggle(!toggle)} />
      <h1>
        {headerTitle == "" ? "DASHBOARD" : headerTitle.toString().toUpperCase()}
      </h1>
      <FiUserCheck />
    </header>
  );
}
