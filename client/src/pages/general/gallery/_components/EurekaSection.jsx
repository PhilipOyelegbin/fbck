import { Link } from "react-router-dom";
import banner from "../../../../assets/service1.jpg";

function EurekaSection() {
  return (
    <section className='text-center px-5 md:px-20 py-20 flex flex-col items-center md:flex-row gap-5'>
      <div
        className='flex-1 space-y-3'
        data-aos='fade-in'
        data-aos-easing='ease-in-sine'
        data-aos-duration='1500'>
        <h2>Eureka Magazine</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ut
          tempore quisquam odit ratione vitae nam. Velit quisquam nisi beatae
          eligendi vel, est ad harum tempore pariatur. Eligendi corporis, facere
          magni ab id dignissimos, sint iusto animi molestias, earum aut ipsam.
          Quo laudantium fuga minus explicabo nostrum eius obcaecati cupiditate.
        </p>
        <Link to='/' className='btn block mx-auto max-w-fit'>
          Download
        </Link>
      </div>
      <div
        className='flex-1 hidden md:block'
        data-aos='zoom-in'
        data-aos-easing='ease-in-sine'
        data-aos-duration='1500'>
        <img
          loading='lazy'
          className='w-full rounded-lg'
          src={banner}
          alt='youth banner'
        />
      </div>
    </section>
  );
}

export default EurekaSection;
