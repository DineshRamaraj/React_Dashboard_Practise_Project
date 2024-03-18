import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";
import "./index.css";

const ChartComponent = () => {
  const data = [
    {
      name: "Week 1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Week 2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Week 3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Week 4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Week 5",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  return (
    <div className="chart-container">
      <h1 className="chart-title">Activites</h1>
      <div className="chart-sub-heading-container">
        <p className="chart-sub-title">May 2023-2024</p>
        <div className="guest-user-container">
          <p className="guest">Guest</p>
          <p className="user">User</p>
        </div>
      </div>
      <LineChart
        width={1000}
        height={400}
        data={data}
        margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#9BDD7C" />
        <Line type="monotone" dataKey="uv" stroke="#E9A0A0" />
      </LineChart>
    </div>
  );
};

export default ChartComponent;
