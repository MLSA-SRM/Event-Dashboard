import React from "react";
import { Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/light.css";

const RegPie = ({ attendence, total }) => {
  const colors = ["#3454ee", "#ff4444"];

  return (
    <Tippy
      content="This tab shows the total registered participants."
      theme="light"
      animation="scale"
    >
      <div className="dash-col2">
        <h1 className="dash-header" style={{ textAlign: "left" }}>
          NUMBER OF REGISTRATIONS
        </h1>
        <PieChart width={240} height={250} margin="none">
          <Pie
            data={attendence}
            dataKey="value"
            cx={130}
            cy={100}
            outerRadius={70}
            innerRadius={60}
            paddingAngle={3}
            fill="#8884d8"
            label
          >
            {attendence.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          <Tooltip />
        </PieChart>
        <p style={{ color: "#3454ee", marginTop: "5vh", textAlign: "left" }}>
          Venue Capacity <b>{total}</b>
        </p>
      </div>
    </Tippy>
  );
};

export default RegPie;
