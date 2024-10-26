import { FiFacebook, FiRadio, FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <header className="flex items-center justify-center h-svh px-5 lg:px-20 bg-gray-800 bg-[url('./assets/hero-bg1.jpg')] bg-blend-overlay bg-center bg-cover bg-no-repeat">
      <div className='flex flex-col items-center gap-5 text-center text-slate-200 md:w-2/3 xl:w-2/5'>
        <h1>Empowering Faith & Enriching Lives</h1>
        <h5 className='mb-5'>
          Come as You Are and Embrace the Spirit of Community and Belonging.
        </h5>
        <div className='grid grid-cols-3 gap-10 text-3xl md:text-6xl'>
          <Link to='/'>
            <FiYoutube className='text-red-600 hover:text-red-500 duration-150 ease-linear' />
          </Link>
          <Link to='/'>
            <FiFacebook className='text-blue-600 hover:text-blue-500 duration-150 ease-linear' />
          </Link>
          <Link to='/'>
            <FiRadio className='text-red-600 hover:text-red-500 duration-150 ease-linear' />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;