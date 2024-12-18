import youth from "../../../../assets/service3.jpg";
import student from "../../../../assets/service1.jpg";
import senior from "../../../../assets/service2.jpg";
import thanksgiving from "../../../../assets/service2.jpg";

const data = [
  { banner: youth, label: "Youth Week (June)" },
  { banner: student, label: "Student Week (August)" },
  { banner: senior, label: "Senior Citizens (December)" },
  { banner: thanksgiving, label: "Annual Thanksgiving (December)" },
];

function EventSection() {
  return (
    <section className='px-5 md:px-20 py-10 text-gray-600 rounded-tr-[60px] rounded-bl-[60px]'>
      <div className='relative max-w-xl mx-auto sm:text-center'>
        <h3 className='text-blue-500 text-center text-3xl font-semibold sm:text-4xl'>
          Our Yearly Events
        </h3>
      </div>
      <div className='mt-8 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 md:grid-cols-3 lg:grid-cols-4'>
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

export default EventSection;
