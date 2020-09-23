import React from "react";
import { Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

const BranchPie = ({ pieData }) => {
  const colors = ["#3454ee", "#ff4444"];
  const colors2 = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"];
  return (
    <div className='dash-col2'>
      <h1 className='dash-header' style={{ textAlign: "left" }}>
        REGISTRATIONS BY BRANCH
      </h1>
      <PieChart width={240} height={250} marginTop={30}>
        <Pie
          data={pieData}
          dataKey='no'
          nameKey='branch'
          cx={130}
          cy={100}
          outerRadius={70}
          fill='#8884d8'
          innerRadius={60}
          paddingAngle={3}
          label
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors2[index % colors2.length]}
            />
          ))}
        </Pie>
        <Legend layout='horizontal' verticalAlign='bottom' align='center' />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default BranchPie;
