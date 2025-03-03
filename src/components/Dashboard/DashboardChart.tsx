import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DataChart } from "../../types/dashboard";

const DashboardChart = ({ chartData }: { chartData: DataChart[] }) => {
  return (
    <div className="w-full h-[250px] -ml-6 mt-5">
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FF7A59"
            strokeWidth={2}
            dot={{ r: 4, fill: "#0091AE" }}
            activeDot={{ r: 8, fill: "#0091AE" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
