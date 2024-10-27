import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className='max-w-7xl w-full py-10 px-5 md:px-20'>
      <h3 className='text-3xl text-center font-bold text-blue-500 mb-4'>
        About Us
      </h3>
      <p>
        First Baptist Church Kosofe was founded in 1924. It became an autonomous
        local congregation of believers in Christ in 1926. During the Lagos
        State Baptist Conference/First Baptist Church Houston Texas Crusade in
        1991, our friends from Houston who worshipped with us named us “THE
        HAPPY PEOPLE.” The church belongs to the worldwide family of Baptist
        through the{" "}
        <Link to='https://nigerianbaptist.org' className='font-bold'>
          Nigeria Baptist Convention.
        </Link>{" "}
        <Link to='/about' className='underline text-blue-500'>
          Continue reading...
        </Link>
      </p>
    </section>
  );
}

export default AboutSection;
