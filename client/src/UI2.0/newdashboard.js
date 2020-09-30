import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import LineGraph from "./linechart";
import RegPie from "./reg_pie";
import NewNav from "./newnav";
import BranchPie from "./BranchPie";
import UpcomingEvents from "./upcomingevents";
import EventInfo from "./eventinfo";
import OtherDetails from "./otherdetails";
import "./newdashboard.css";
import "./style.css";
import { State } from "../Context";
const NewDash = () => {
  // let dummy = "yoman";
  // const { dummy } = useContext(State);
  const [barData, setBarData] = useState([]);
  const [total, setTotal] = useState(null);
  const [pieData, setPieData] = useState([]);
  const [attendence, setAttedence] = useState([]);
  let value = JSON.parse(localStorage.getItem("test"));
  useEffect(() => {
    axios
      .post("/bardata", {
        name: value.data,
      })
      .then((res) => {
        console.log(res.data);
        const barData = res.data;
        setBarData(barData);
      });

    axios
      .post("/piechart", {
        name: value.data,
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
    <div style={{padding: "4vh"}}>
      <NewNav />
      <div className='new-dash-body'>
        <div className='dash-row'>
          <EventInfo name={value.data} date={value.date} />
          <RegPie attendence={attendence} total={total} />
          <UpcomingEvents />
        </div>
        <div className='dash-row'>
          <LineGraph barData={barData} />
          <BranchPie pieData={pieData} />
          <OtherDetails />
        </div>
      </div>
    </div>
  );
};

export default NewDash;
