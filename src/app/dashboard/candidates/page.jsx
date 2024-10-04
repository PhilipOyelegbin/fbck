"use client";

import Image from "next/image";

function CandidatePage() {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "Martiana dialan",
      title: "Product designer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      name: "Micheal colorand",
      title: "Software engineer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Daniel martin",
      title: "Product designer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Vicky tanson",
      title: "Product manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
  ];

  const handleVote = (id) => {
    console.log(id);
  };

  return (
    <section className='max-w-screen-xl mx-auto p-5'>
      <div className='max-w-xl'>
        <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
          Know your representatives
        </h3>
        <p className='text-gray-600 mt-3'>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy.`}
        </p>
      </div>
      <ul className='grid gap-8 lg:grid-cols-2 mt-12'>
        {team.map((item, idx) => (
          <li key={idx} className='gap-8 sm:flex'>
            <div className='w-full h-60'>
              <Image
                src={item.avatar}
                width={300}
                height={300}
                className='w-full h-full object-cover object-center shadow-md rounded-xl'
                alt={item.name}
              />
            </div>
            <div className='mt-4 sm:mt-0 space-y-2'>
              <h4 className='text-lg text-gray-700 font-semibold'>
                {item.name}
              </h4>
              <p className='text-indigo-600'>{item.title}</p>
              <p className='text-gray-600 mt-2'>{item.desc}</p>
              <button
                className='w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150'
                onClick={() => handleVote(item?.id)}>
                Cast your vote
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CandidatePage;
