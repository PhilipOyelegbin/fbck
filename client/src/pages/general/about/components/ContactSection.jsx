import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <section className='px-5 md:px-20 py-14 flex flex-col md:flex-row gap-5 items-center'>
      <div
        className='flex-1 space-y-5'
        data-aos='fade-in'
        data-aos-easing='ease-in-sine'
        data-aos-duration='1500'>
        <h2>Get intouch with us.</h2>
        <div className='space-y-3'>
          <p>
            Address: 592 Ikorodu Road, Kosofe bus-stop, Mile 12, Lagos State,
            Nigeria.
          </p>
          <p>
            Email:{" "}
            <Link
              className='underline text-blue-500'
              to='mailto:fbckosofelagos@gmail.com'>
              fbckosofelagos@gmail.com
            </Link>
          </p>
          <p>
            Phone:{" "}
            <Link className='underline text-blue-500' to='tel:+2348059334449'>
              +234 805 9334 449
            </Link>
          </p>
        </div>
      </div>

      <div
        className='flex-1'
        data-aos='zoom-in'
        data-aos-easing='ease-in-sine'
        data-aos-duration='1500'>
        <iframe
          className='md:hidden w-full aspect-video'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.326043141088!2d3.3899911741495683!3d6.606346022196787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92e3b05b1b63%3A0x66315230d8c8558!2s592%20Ikorodu-Ososun%20Rd%2C%20Mile%2012%2C%20Lagos%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1712179999777!5m2!1sen!2sng'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'></iframe>
        <iframe
          className='hidden md:block mx-auto w-full aspect-video'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.326043141088!2d3.3899911741495683!3d6.606346022196787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92e3b05b1b63%3A0x66315230d8c8558!2s592%20Ikorodu-Ososun%20Rd%2C%20Mile%2012%2C%20Lagos%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1712179999777!5m2!1sen!2sng'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'></iframe>
      </div>
    </section>
  );
}

export default ContactSection;
