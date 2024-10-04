import Image from "next/image";
import Link from "next/link";
import {
  FiActivity,
  FiCodesandbox,
  FiLogOut,
  FiUser,
  FiUsers,
} from "react-icons/fi";

export default function Sidebar() {
  const navigation = [
    {
      href: "/dashboard",
      name: "Overview",
      icon: <FiCodesandbox />,
    },
    {
      href: "/dashboard/candidtate",
      name: "Candidates",
      icon: <FiUsers />,
    },
    {
      href: "/dashboard/events",
      name: "Events",
      icon: <FiActivity />,
    },
    {
      href: "/dashboard/profile",
      name: "My Profile",
      icon: <FiUser />,
    },
  ];

  const navsFooter = [
    {
      href: "/",
      name: "Logout",
      icon: <FiLogOut />,
    },
  ];

  return (
    <nav className='fixed top-0 left-0 w-20 h-full border-r bg-white space-y-8'>
      <div className='flex flex-col h-full'>
        <div className='h-20 flex items-center justify-center px-8'>
          <Image
            src='https://floatui.com/logo-letter.png'
            width={35}
            height={80}
            className='mx-auto'
          />
        </div>

        <div className='flex-1 flex flex-col h-full'>
          <ul className='px-4 text-sm font-medium flex-1'>
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className='relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group'>
                  <div className='text-gray-500 text-2xl'>{item.icon}</div>
                  <span className='absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150'>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className='px-4 pb-4 text-sm font-medium'>
            {navsFooter.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className='relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group'>
                  <div className='text-gray-500 text-2xl'>{item.icon}</div>
                  <span className='absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150'>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
