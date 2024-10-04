import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Rev. Dr. F.I Olatunde",
      title: "Undersheperherd",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      name: "Rev. Tobi Olubiyi",
      title: "Youth and Tennage Pastor",
    },

    {
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "Rev. Martiana Dialan",
      title: "Children Pastor",
    },
  ];

  return (
    <section className='max-w-screen-xl mx-auto px-5 md:px-20 py-14'>
      <div className='max-w-xl mx-auto sm:text-center'>
        <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
          Our Pastorial team
        </h3>
        <p className='text-gray-600 mt-3'>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown.`}
        </p>
      </div>
      <ul className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 mt-12'>
        {team.map((item, idx) => (
          <li key={idx}>
            <div className='w-full h-60 sm:h-52 md:h-56'>
              <Image
                src={item.avatar}
                width={300}
                height={300}
                className='w-full h-full object-cover object-center shadow-md rounded-xl'
                alt={item.name}
              />
            </div>
            <div className='mt-4'>
              <h4 className='text-lg text-gray-700 font-semibold'>
                {item.name}
              </h4>
              <p className='text-indigo-600'>{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
