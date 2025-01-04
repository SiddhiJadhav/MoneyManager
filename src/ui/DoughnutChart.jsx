import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
);
export default function DoughnutChart({ income, expense }) {
  return (
    <div>
      <Doughnut
        data={{
          labels: ['Income', 'Expense'],
          datasets: [
            {
              label: 'Total',
              data: [income, expense],
              backgroundColor: ['#68ff6f', '#ff5757'],
            },
          ],
        }}
      />
    </div>
  );
}
