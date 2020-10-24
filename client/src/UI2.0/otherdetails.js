import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/light.css";
import { Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

const pieData = [
  {
    name: "1st Year",
    value: 100,
  },
  {
    name: "2nd Year",
    value: 150,
  },
  { name: "3rd Year", value: 300 },
  { name: "4th Year", value: 200 },
];

const colors2 = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"];

const OtherDetails = ({ yearData }) => {
  return (
    <Tippy
      theme='light'
      animation='scale'
      content='This tab shows registrations by branch.'
    >
      <div style={{ textAlign: "left" }} className='dash-col2'>
        <h1
          className='dash-header'
          style={{ textAlign: "left", marginBottom: "5vh" }}
        >
          REGISTRATIONS BY YEAR
        </h1>
        <PieChart width={240} height={250} marginTop={30}>
          <Pie
            data={yearData}
            dataKey='no'
            nameKey='year'
            cx={130}
            cy={100}
            outerRadius={70}
            fill='#8884d8'
            innerRadius={60}
            paddingAngle={3}
            label
          >
            {yearData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors2[index % colors2.length]}
              />
            ))}
          </Pie>
          <Legend layout='horizontal' verticalAlign='bottom' align='center' />
        </PieChart>
      </div>
    </Tippy>
  );
};

export default OtherDetails;
