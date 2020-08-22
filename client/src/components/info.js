import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";
import "./info.css";

//BAR GRAPH DUMMY DATA
// const data = [
// 	{ name: 'Monday', uv: 400, pv: 2400, amt: 2400 },
// 	{ name: 'Tuesday', uv: 200, pv: 1200, amt: 2400 },
// 	{ name: 'Wednesday', uv: 700, pv: 1600, amt: 2400 },
// 	{ name: 'Thursday', uv: 100, pv: 1000, amt: 2400 }
// ];

//PIECHART DUMMY DATA
// const data1 = [
//   { name: "CSE", value: 400 },
//   { name: "ECE", value: 250 },
//   { name: "Mechanical", value: 300 },
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Info = () => {
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  useEffect(() => {
    axios.get("/bardata").then((res) => {
      console.log(res.data);
      const barData = res.data;
      setBarData(barData);
    });

    axios.get("/piechart").then((res) => {
      console.log(res.data);
      const pieData = res.data;
      setPieData(pieData);
    });
  }, []);

  return (
    <div>
      <div className='title'>
        <h1 className='titletext'>Event Overview</h1>
      </div>
      <div className='body'>
        <div className='box'>
          <h3 className='charttitle'>Registrations This Week</h3>
          <LineChart
            width={440}
            height={250}
            data={barData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line
              type='monotone'
              strokeWidth='2'
              dataKey='no'
              stroke='#8884d8'
            />
            <CartesianGrid
              stroke='#ccc'
              strokeWidth='1'
              strokeDasharray='0 0'
            />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className='box'>
          <h3 className='charttitle'>Registrations By Branch</h3>
          <PieChart width={500} height={250}>
            <Pie
              data={pieData}
              dataKey='no'
              nameKey='branch'
              cx='50%'
              cy='50%'
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              fill='#82ca9d'
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill='#8884d8'
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline='central'
                  >
                    {pieData[index].name} ({value})
                  </text>
                );
              }}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Info;
