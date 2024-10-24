import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Loading from "../../../../components/loading";

ChartJs.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function LineChart() {
  const [candidateData, setCandidateData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const data = {
    labels: candidateData?.map((data) => data.name) || [],
    datasets: [
      {
        label: "Top Voted Candidate",
        data: candidateData?.map((data) => data.vote.length) || [],
        backgroundColor: ["#face14", "#495E57"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const candidateResponse = await fetch(
          `${import.meta.env.VITE_API_URI}/api/candidate`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
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
      } finally {
        setLoading(false);
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
    <section className='chart-section'>
      <Line data={data} options={options} className='line-chart' />
    </section>
  );
}
