import olatunde from "../../../../assets/olatunde.jpg";
import male from "../../../../assets/male.jpg";
import female from "../../../../assets/female.jpg";

const data = [
  {
    avatar: olatunde,
    name: "Rev. Dr. Festus I. Olatunde",
    position: "Senior Pastor",
  },
  {
    avatar: male,
    name: "Rev. Tobi Olubiyi",
    position: "Youth and Teenagers Pastor",
  },
  { avatar: female, name: "Pst. Miss Mary Jesus", position: "Children Pastor" },
];

function TeamSection() {
  return (
    <section className='px-5 md:px-20 py-14 bg-blue-500 text-white rounded-tr-[60px] rounded-bl-[60px]'>
      <div className='relative max-w-xl mx-auto sm:text-center'>
        <h3 className='text-3xl font-semibold sm:text-4xl'>
          Our Pastorial Team
        </h3>
      </div>
      <div className='mt-8 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
        {data?.map((item, idx) => (
          <figure
            key={idx}
            data-aos='fade-in'
            data-aos-easing='ease-in-sine'
            data-aos-duration='1500'
            className='relative flex-1 flex items-stretch text-center flex-col rounded-xl'>
            <img
              src={item.avatar}
              className='rounded-xl h-[250px] md:h-[400px]'
              alt={item.position}
            />
            <figcaption className='p-3'>
              <h5 className='font-medium'>{item.name}</h5>
              <p>{item.position}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
