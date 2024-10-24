import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart({ candidateData }) {
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

  return (
    <section className='chart-section'>
      <Bar data={data} options={options} className='bar-chart' />
    </section>
  );
}
