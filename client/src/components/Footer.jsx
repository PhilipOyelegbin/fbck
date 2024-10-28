import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiFacebook, FiRadio, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  const footerMenu = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Gallery", link: "/gallery" },
    // { label: "Contact", link: "/contact" },
  ];

  const socialLink = [
    {
      label: "Facebook",
      url: "https://facebook.com/profile.php?id=100011203590963",
      icon: <FiFacebook />,
    },
    {
      label: "Twitter",
      url: "https://x.com/Fbckosofelagos",
      icon: <FiTwitter />,
    },
    {
      label: "Youtube",
      url: "https://www.youtube.com/@FirstBaptistChurchKosofeLagos",
      icon: <FiYoutube />,
    },
    {
      label: "Mixlr",
      url: "https://firstbaptistchurchkosofe.mixlr.com",
      icon: <FiRadio />,
    },
  ];

  return (
    <footer className='bg-gray-200 p-5 lg:px-20'>
      <div className='flex flex-wrap justify-between'>
        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0'>
          <img
            src={logo}
            alt='fbck logo'
            className='w-20 aspect-square object-fill'
          />
          <p className='text-gray-700'>Sanctuary of happy people...</p>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0'>
          <h4 className='font-bold text-blue-600 mb-2'>Quick Links</h4>
          <ul className='space-y-2'>
            {footerMenu.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className='text-lg text-gray-700 hover:text-blue-600'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0'>
          <h4 className='font-bold text-blue-600 mb-2'>Social Media</h4>
          <ul className='space-y-2'>
            {socialLink.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.url}
                  className='flex gap-1 items-center text-lg text-gray-700 hover:text-blue-600'
                  target='_blank'>
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className='my-3 text-gray-700 text-center'>
        &copy; {year} :: First Baptist Church Kosofe Lagos | Powered by Media
        Unit
      </p>
    </footer>
  );
}
