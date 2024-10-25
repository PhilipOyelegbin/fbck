import { FiChevronsDown } from "react-icons/fi";

function HeroSection() {
  return (
    <header className="flex items-center justify-center h-svh px-5 lg:px-20 bg-gray-800 bg-[url('./assets/hero-bg2.jpg')] bg-blend-overlay bg-center bg-cover bg-no-repeat">
      <div className='flex flex-col items-center gap-5 text-center text-slate-200 md:w-2/3 xl:w-2/5'>
        <h1>Explore Our Rich History</h1>
        <h5 className='mb-5'>Sanctuary of the Happy People!!!</h5>
        <FiChevronsDown className='text-3xl md:text-6xl text-red-500 animate-pulse' />
      </div>
    </header>
  );
}

export default HeroSection;
