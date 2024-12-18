import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className='max-w-7xl w-full py-10 px-5 md:px-20'>
      <h3 className='text-3xl text-center font-bold text-blue-500 mb-4'>
        A brief history of First Baptist Church Kosofe
      </h3>
      <h4>Founding and Early Years (1924 - 1926)</h4>
      <p>
        First Baptist Church Kosofe was founded in 1924, marking the beginning
        of a significant spiritual journey in the Kosofe community. Originally
        established by a group of dedicated Christians, the church quickly
        became a beacon of hope and faith in the area. By 1926, just two years
        after its founding, the church had grown sufficiently in both membership
        and spiritual maturity to become an autonomous local congregation of
        believers in Christ. This autonomy allowed the church to develop its own
        unique identity and approach to worship and community service, laying a
        strong foundation for future growth{" "}
        <Link to='/about' className='underline text-blue-500'>
          Continue reading...
        </Link>
      </p>
    </section>
  );
}

export default AboutSection;
