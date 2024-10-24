import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BarChart from "./BarChart";
import Loading from "../../../../components/loading";

export default function Datapool() {
  const [votingData, setVotingData] = useState([]);
  const [candidateData, setCandidateData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [votingResponse, candidateResponse] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URI}/api/vote`, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }),
          fetch(`${import.meta.env.VITE_API_URI}/api/candidate`, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }),
        ]);

        if (!votingResponse.ok || !candidateResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const votingData = await votingResponse.json();
        const candidateData = await candidateResponse.json();

        setVotingData(votingData?.data || []);
        setCandidateData(candidateData?.data || []);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className='min-h-screen'>
      <div className='bg-white shadow-md rounded-lg p-3 mb-5'>
        <h3 className='text-xl font-semibold text-gray-700 mb-2'>
          Total Voters:{" "}
          <span className='text-blue-600'>{votingData.length}</span>
        </h3>
        {/* Bar Chart */}
        <div className='bg-gray-100 shadow-md rounded-lg p-3'>
          <h3 className='text-lg font-semibold text-gray-700 mb-4'>
            Vote Count per Candidate
          </h3>
          <BarChart candidateData={candidateData} />
        </div>
      </div>

      <div className='shadow-md rounded-lg p-5 my-5 bg-white'>
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            Candidates
          </h2>
          <Link to='/dashboard/candidates' className='underline'>
            View all
          </Link>
        </div>
        <div className='overflow-x-auto'>
          <table className='text-center min-w-full bg-white border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='py-2 px-4 border-b'>ID</th>
                <th className='py-2 px-4 border-b'>Name</th>
                <th className='py-2 px-4 border-b'>Votes</th>
              </tr>
            </thead>
            <tbody>
              {candidateData.map((item) => (
                <tr key={item.id} className='text-sm hover:bg-gray-100'>
                  <td className='py-1 px-2 border-b'>
                    {item.id.split("-")[0]}...
                  </td>
                  <td className='py-1 px-2 border-b'>{item.name}</td>
                  <td className='py-1 px-2 border-b'>
                    {item.vote.length || 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
