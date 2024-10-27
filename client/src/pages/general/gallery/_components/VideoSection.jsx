const data = [
  "https://www.youtube.com/embed/y0PXNvj5hF0?si=UQdCU9iSVED6pG1q",
  "https://www.youtube.com/embed/oJESv7hNEM4?si=sJPC305zKsu12c3c",
  "https://www.youtube.com/embed/-tXSMlNWEXs?si=6TEBF5zuEpLf7CDp",
  "https://www.youtube.com/embed/01YYcuwTx8w?si=t8p8O4mtjj9VzGaG",
];

function VideoSection() {
  return (
    <section className='text-center px-5 md:px-20 py-20 bg-blue-500 text-white rounded-tr-[60px] rounded-bl-[60px]'>
      <h2>Sailing Through Our Collective Memories</h2>
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'
        id='videoGallery'>
        {data?.map((item, idx) => (
          <iframe
            data-aos='fade-in'
            data-aos-easing='ease-in-sine'
            data-aos-duration='1500'
            src={item}
            key={idx}
            title='YouTube video player'
            className='w-full aspect-video rounded-lg'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen></iframe>
        ))}
      </div>
    </section>
  );
}

export default VideoSection;
