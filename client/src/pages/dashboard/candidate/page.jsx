import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CandidateCard = ({ item, handleVote }) => (
  <li className='shadow-md shadow-gray-400 rounded-lg'>
    <img
      src={item?.image_url}
      className='w-full h-60 object-cover rounded-lg object-center'
      alt={item?.name}
    />
    <div className='mt-4 space-y-2 p-2'>
      <h4 className='text-lg text-gray-700 font-semibold'>{item.name}</h4>
      <p className='text-indigo-600'>{item?.gender}</p>
      <p className='text-gray-600 mt-2'>{item?.description}</p>
      <button
        className='btn'
        onClick={() => handleVote(sessionStorage.getItem("userId"), item.id)}>
        Cast your vote:{" "}
        <span className='font-bold'>{item?.vote?.length || 0}</span>
      </button>
    </div>
  </li>
);

const CandidatesPage = () => {
  const [candidateData, setCandidateData] = useState(null);

  const handleVote = async (userId, candidateId) => {
    try {
      const voteData = { userId, candidateId };
      const response = await fetch(`${import.meta.env.VITE_API_URI}/api/vote`, {
        method: "POST",
        body: JSON.stringify(voteData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        toast.success("Vote recorded successfully");
      } else {
        toast.error(response.statusText);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URI}/api/candidate`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setCandidateData(data?.data);
      } catch (error) {
        console.error("Error fetching voting data:", error);
      }
    };

    fetchCandidateData();
  }, [candidateData]);

  return (
    <section className='max-w-screen-xl rounded-lg bg-white mx-auto p-5'>
      <div className='max-w-xl'>
        <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
          Know your representatives
        </h3>
        <p className='text-gray-600 mt-3'>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy.`}
        </p>
      </div>
      <ul className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12'>
        {candidateData?.map((item) => (
          <CandidateCard key={item.id} item={item} handleVote={handleVote} />
        ))}
      </ul>
    </section>
  );
};

export default CandidatesPage;
