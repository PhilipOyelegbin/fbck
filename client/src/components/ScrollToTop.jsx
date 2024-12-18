import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-4 right-4'>
      {isVisible && (
        <FiChevronUp
          onClick={scrollToTop}
          className='p-2 text-5xl animate-pulse bg-rose-700 text-white rounded-full shadow-lg cursor-pointer'
        />
      )}
    </div>
  );
};

export default ScrollToTop;
