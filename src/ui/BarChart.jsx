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
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);
export default function BarChart({ income, expense }) {
  debugger;
  return (
    <div>
      <Bar
        data={{
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              label: 'INCOME',
              data: income,
              backgroundColor: '#68ff6f',
            },
            {
              label: 'EXPENSE',
              data: expense,
              backgroundColor: '#ff5757',
            },
          ],
        }}
      />
    </div>
  );
}
