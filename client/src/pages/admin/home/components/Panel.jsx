import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUser, FaUsers, FaVoteYea } from "react-icons/fa";
import { getUser, getCandidate, getVote } from "../../components/action";
import LineChart from "./LineChart";

function Panel() {
  const [users, setUsers] = useState(0);
  const [candidate, setCandidate] = useState(0);
  const [vote, setVote] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, candidateResponse, voteResponse] =
          await Promise.all([getUser(), getCandidate(), getVote()]);
        if (userResponse.ok) {
          const result = await userResponse.json();
          setUsers(result?.data.length || 0);
        } else {
          console.error("Error fetching users:", userResponse?.statusText);
        }
        if (candidateResponse.ok) {
          const result = await candidateResponse.json();
          setCandidate(result?.data.length || 0);
        } else {
          console.error(
            "Error fetching hostings:",
            candidateResponse?.statusText
          );
        }
        if (voteResponse.ok) {
          const result = await voteResponse.json();
          setVote(result?.data.length || 0);
        } else {
          console.error("Error fetching websites:", voteResponse?.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='p-5 bg-white rounded shadow-md'>
      <h2 className='text-3xl font-bold text-purple-600 mb-4'>Admin Panel</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <div className='bg-purple-100 p-4 rounded shadow-md flex items-center gap-5 justify-center'>
          <div>
            <h3 className='text-lg font-bold text-purple-600 mb-2'>Users</h3>
            <p className='text-3xl font-bold text-gray-700'>{users}</p>
            <Link
              to='/panel/users'
              className='text-sm text-purple-600 hover:text-purple-700'>
              View All Users
            </Link>
          </div>
          <FaUser className='w-20 h-20' />
        </div>

        <div className='bg-blue-100 p-4 rounded shadow-md flex items-center gap-5 justify-center'>
          <div>
            <h3 className='text-lg font-bold text-blue-600 mb-2'>Candidates</h3>
            <p className='text-3xl font-bold text-gray-700'>{candidate}</p>
            <Link
              to='/panel/candidates'
              className='text-sm text-blue-600 hover:text-blue-700'>
              View All Candidates
            </Link>
          </div>
          <FaUsers className='w-20 h-20' />
        </div>

        <div className='bg-orange-100 p-4 rounded shadow-md flex items-center gap-5 justify-center'>
          <div>
            <h3 className='text-lg font-bold text-orange-600 mb-2'>Votes</h3>
            <p className='text-3xl font-bold text-gray-700'>{vote}</p>
            <Link
              to='/panel/votes'
              className='text-sm text-orange-600 hover:text-orange-700'>
              View All Votes
            </Link>
          </div>
          <FaVoteYea className='w-20 h-20' />
        </div>
      </div>

      <LineChart />
    </div>
  );
}

export default Panel;
