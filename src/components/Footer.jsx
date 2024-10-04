import Image from "next/image";
import Link from "next/link";
import { FiYoutube, FiFacebook, FiTwitter, FiRadio } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  const footerNavs = [
    {
      href: "/1",
      name: "About",
    },
    {
      href: "/2",
      name: "Blog",
    },
    {
      href: "/3",
      name: "Our Services",
    },
    {
      href: "/about#teams",
      name: "Team",
    },
    {
      href: "/4",
      name: "Careers",
    },
    {
      href: "/5",
      name: "Suuport",
    },
  ];

  return (
    <footer className='text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8'>
      <div className='max-w-lg sm:mx-auto sm:text-center'>
        <Image
          src='https://www.floatui.com/logo.svg'
          className='w-32 sm:mx-auto'
          width={150}
          height={50}
        />
        <p className='leading-relaxed mt-2 text-[15px]'>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>

      <ul className='items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0'>
        {footerNavs.map((item, idx) => (
          <li className=' hover:text-gray-800'>
            <Link key={idx} href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className='mt-8 items-center justify-between sm:flex'>
        <div className='mt-4 sm:mt-0'>
          &copy; {year} FBCK All rights reserved.
        </div>

        <div className='mt-6 sm:mt-0'>
          <ul className='flex items-center space-x-4'>
            <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
              <Link href='/'>
                <FiYoutube />
              </Link>
            </li>

            <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
              <Link href='/'>
                <FiRadio />
              </Link>
            </li>

            <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
              <Link href='/'>
                <FiFacebook />
              </Link>
            </li>

            <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
              <Link href='/'>
                <FiTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
