import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineGraph = ({ barData }) => {
  return (
    <div className='dash-col1'>
      <h1 className='dash-header' style={{ textAlign: "left" }}>
        REGISTRATIONS BY WEEK
      </h1>
      <p style={{ color: "#3454ee", textAlign: "left" }}>This Week: 785</p>
      <p
        style={{
          color: "lightgrey",
          textAlign: "left",
          marginBottom: "1vh",
        }}
      >
        Last Week: 645
      </p>
      <LineChart
        width={500}
        height={300}
        data={barData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray='2 2' />
        <XAxis dataKey='name' />
        <YAxis dataKey='no' tickCount={10} />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='no' stroke='#3545ee' />
      </LineChart>
    </div>
  );
};

export default LineGraph;
