import { PieChart, Pie, Cell } from "recharts";

import "./index.css";

const ChartContainer = () => {
  const chartDetails = [
    { category: "Basic Tees", sales: 55, color: "#98D89E" },
    { category: "custom short Pants", sales: 31, color: "#EE8484" },
    { category: "Super Hoodies", sales: 14, color: "#F6DC7D" },
  ];

  return (
    <div className="main-pie-container">
      <div className="pie-chart-container">
        <div className="pie-chart-title-sub-title">
          <h1 className="pie-chart-title">Top Products</h1>
          <p className="pie-chart-sub-title">May June 2021</p>
        </div>
        <div className="pie-chart">
          <PieChart width={250} height={250}>
            <Pie
              data={chartDetails}
              cx="50%"
              cy="30%"
              outerRadius="60%"
              dataKey="sales"
            >
              <Cell name="Basic Tees" fill="#98D89E" />
              <Cell name="custom short Pants" fill="#EE8484" />
              <Cell name="Super Hoodies" fill="#F6DC7D" />
            </Pie>
          </PieChart>
          <ul className="pie-chart-list-container">
            {chartDetails.map((eachItem) => (
              <li
                className="list-item"
                key={eachItem.category}
                style={{ "--marker-color": eachItem.color }}
              >
                <p className="list-item-heading">{eachItem.category}</p>
                <p className="list-item-sub-title">{eachItem.sales} %</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="result-container">
        <div className="result-title-sub-title">
          <h1 className="result-title">Today's schedule</h1>
          <p className="result-sub-title">See All </p>
        </div>
        <ul className="result-list-container">
          <li className="result-item result-item-one">
            <p className="result-item-title">
              Meetings with suppliers from Kuta Bali
            </p>
            <p className="result-item-time">14:00 - 15:00</p>
            <p className="result-item-address">at Sunset Road, Kuta Bali</p>
          </li>
          <li className="result-item result-item-two">
            <p className="result-item-title">
              Check Operation at Giga Factory 1
            </p>
            <p className="result-item-time">18:00 - 20:00</p>
            <p className="result-item-address">at Central Jakarta</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChartContainer;
