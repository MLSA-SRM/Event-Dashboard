import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import { State } from "../Context";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/light.css";

const RegPie = () => {
  const { dummy, date } = useContext(State);
  const [total, setTotal] = useState(null);
  const [pieData, setPieData] = useState([]);
  const [attendence, setAttedence] = useState([]);

  const colors = ["#3454ee", "#ff4444"];

  useEffect(() => {
    axios
      .post("/piechart", {
        name: dummy,
      })
      .then((res) => {
        console.log(res.data);
        const pieData = res.data.data;
        let total = res.data.total;
        let remain = total - res.data.attendence;
        const num = [
          { name: "Registered", value: res.data.attendence },
          { name: "Remaining", value: remain },
        ];
        setTotal(total);
        setAttedence(num);
        setPieData(pieData);
      });
  }, []);
  return (
    <Tippy
      theme="light"
      animation="scale"
      content="This tab shows the number of registered participants"
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
