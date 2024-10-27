import discipleship from "../../../../assets/discipleship.jpg";

const data = [
  discipleship,
  discipleship,
  discipleship,
  discipleship,
  discipleship,
  discipleship,
  discipleship,
];

function PhotoSection() {
  return (
    <section className='text-center px-5 md:px-20 py-20'>
      <h2>Our Story in Pictures</h2>
      <div
        className='flex flex-wrap justify-center gap-5 mt-5'
        id='imageGallery'>
        {data?.map((item, idx) => (
          <img
            src={item}
            loading='lazy'
            key={idx}
            className='w-[300px] aspect-square rounded-lg duration-300 ease-linear hover:scale-110'
            alt='gallery pictures'
          />
        ))}
      </div>
    </section>
  );
}

export default PhotoSection;
