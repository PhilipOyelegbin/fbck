import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
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

export default function BarChart({ candidateData }) {
  const data = {
    labels: candidateData?.map((data) => data.name) || [],
    datasets: [
      {
        data: candidateData?.map((data) => data.vote.length) || [],
        backgroundColor: ["rgba(53, 162, 235, 0.5)", "rgba(255, 99, 132, 0.5)"],
        borderColor: ["rgba(53, 162, 235, 0.5)", "rgba(255, 99, 132, 0.5)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
      title: {
        display: true,
        text: "Top Voted Candidate",
      },
    },
  };

  if (!candidateData) {
    return <Loading />;
  }

  return (
    <section className='my-5 h-96'>
      <Bar data={data} options={options} className='bar-chart' />
    </section>
  );
}
