"use client";
import { useState, useEffect } from "react";
// import { PieChart } from "react-minimal-pie-chart";
// import { Bar } from "react-chartjs-2";

export default function DashStats() {
  const [votingData, setVotingData] = useState({
    totalVotes: 0,
    candidates: [],
  });

  useEffect(() => {
    // Replace with your actual API call to fetch voting data
    const fetchVotingData = async () => {
      try {
        const response = await fetch("/api/voting-data");
        const data = await response.json();
        setVotingData(data);
      } catch (error) {
        console.error("Error fetching voting data:", error);
      }
    };

    fetchVotingData();
  }, []);

  const { totalVotes, candidates } = votingData;

  const pieChartData = candidates.map((candidate) => ({
    title: candidate.name,
    value: candidate.votes,
    color: candidate.color, // Assuming a color property on each candidate
  }));

  const barChartData = {
    labels: candidates.map((candidate) => candidate.name),
    datasets: [
      {
        label: "Number of Votes",
        data: candidates.map((candidate) => candidate.votes),
        backgroundColor: candidates.map((candidate) => candidate.color),
      },
    ],
  };

  return (
    <div className='bg-gray-100 min-h-screen p-5'>
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>
        Voting Dashboard
      </h1>

      <div className='bg-white shadow-md rounded-lg p-3 mb-6'>
        <h3 className='text-xl font-semibold text-gray-700 mb-2'>
          Total Votes: <span className=' text-blue-600'>{totalVotes}</span>
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Pie Chart */}
          <div className='bg-gray-100 shadow-md rounded-lg p-3'>
            <h3 className='text-lg font-semibold text-gray-700 mb-4'>
              Vote Distribution
            </h3>
            {/* <PieChart data={pieChartData} /> */}
          </div>

          {/* Bar Chart */}
          <div className='bg-gray-100 shadow-md rounded-lg p-3'>
            <h3 className='text-lg font-semibold text-gray-700 mb-4'>
              Vote Count per Candidate
            </h3>
            {/* <Bar data={barChartData} /> */}
          </div>
        </div>
      </div>

      <div className='shadow-md rounded-lg p-6 my-6 bg-white'>
        <h2 className='text-xl font-semibold text-gray-700 mb-4'>Candidates</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {candidates.map((candidate) => (
            <li
              key={candidate.id}
              className='bg-gray-100 shadow-md rounded-lg p-4'>
              <p className='font-semibold text-gray-800'>{candidate.name}</p>
              <p className='text-gray-600'>Votes: {candidate.votes}</p>
              {/* Add more candidate details here if needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
