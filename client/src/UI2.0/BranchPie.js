import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/light.css";
import { Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

const BranchPie = ({ pieData }) => {
  const colors2 = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"];
  return (
    <Tippy theme="light"
    animation="scale"
    content="This tab shows the number of registrations per branch.">
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
      </PieChart>
        <Tooltip />
    </div>
    </Tippy>
  );
};

export default BranchPie;
