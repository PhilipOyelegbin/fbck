import sunrise from "../../../../assets/service1.jpg";
import english from "../../../../assets/service2.jpg";
import yoruba from "../../../../assets/service3.jpg";

const data = [
  { banner: sunrise, label: "Sunrise Service (7am -8am)" },
  { banner: english, label: "English Service (8am - 10am)" },
  { banner: yoruba, label: "Yoruba Service (11am - 1pm)" },
];

function ServiceSecton() {
  return (
    <section className='px-5 md:px-20 py-10 text-white bg-blue-500 rounded-tr-[60px] rounded-bl-[60px]'>
      <div className='relative max-w-xl mx-auto sm:text-center'>
        <h3 className='text-center text-3xl font-semibold sm:text-4xl'>
          Our Sunday Services
        </h3>
      </div>
      <div className='mt-8 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
        {data?.map((list, idx) => (
          <div
            key={idx}
            data-aos='fade-in'
            data-aos-easing='ease-in-sine'
            data-aos-duration='1500'
            className='relative text-center space-y-2 flex-1 flex items-stretch flex-col rounded-xl'>
            <img
              className='w-full aspect-square rounded-xl'
              src={list.banner}
              alt={list.label}
            />
            <p>{list.label}</p>
          </div>
        ))}
      </div>{" "}
    </section>
  );
}

export default ServiceSecton;
