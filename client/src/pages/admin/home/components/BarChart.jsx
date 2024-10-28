import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Loading from "../../../../components/loading";

ChartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

export default function BarChart() {
  const [candidateData, setCandidateData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const data = {
    labels: candidateData?.map((data) => data.name) || [],
    datasets: [
      {
        label: "Votes",
        data: candidateData?.map((data) => data.vote.length) || [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Top Voted Candidate",
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const candidateResponse = await fetch(
          `${import.meta.env.VITE_API_URI}/api/candidate`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!candidateResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const candidateData = await candidateResponse.json();

        setCandidateData(candidateData?.data || []);
      } catch (error) {
        setErrorMsg(error.message);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!candidateData) {
    return <Loading />;
  }

  if (errorMsg) {
    return <p className='text-red-500'>Error: error</p>;
  }

  return (
    <section className='my-5 h-96'>
      <Bar data={data} options={options} />
    </section>
  );
}
