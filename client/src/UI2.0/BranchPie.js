import React from "react";
import { Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import { State } from "../Context";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/light.css";

const BranchPie = () => {
  const { dummy, date } = useContext(State);
  const [total, setTotal] = useState(null);
  const [pieData, setPieData] = useState([]);
  const [attendence, setAttedence] = useState([]);

  const colors2 = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"];

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
      content="This tab shows the number of registrations per branch."
    >
      <div className="dash-col2">
        <h1 className="dash-header" style={{ textAlign: "left" }}>
          REGISTRATIONS BY BRANCH
        </h1>
        <PieChart width={240} height={250} marginTop={30}>
          <Pie
            data={pieData}
            dataKey="no"
            nameKey="branch"
            cx={130}
            cy={100}
            outerRadius={70}
            fill="#8884d8"
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
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          <Tooltip />
        </PieChart>
      </div>
    </Tippy>
  );
};


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
