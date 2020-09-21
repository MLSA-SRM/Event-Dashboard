import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";
import NewNav from "./newnav";
import "./newdashboard.css";

const NewDash = () => {
  const data = [
    { name: "Mon", Registrations: "150" },
    { name: "Tue", Registrations: "100" },
    { name: "Wed", Registrations: "200" },
    { name: "Thu", Registrations: "110" },
    { name: "Fri", Registrations: "115" },
    { name: "Sat", Registrations: "150" },
    { name: "Sun", Registrations: "250" },
  ];

  const data01 = [
    { name: "Registered", value: 1295 },
    { name: "Remaining", value: 145 },
  ];

  const data02 = [
    { name: "CSE", value: 275 },
    { name: "Mech", value: 179 },
    { name: "Aerospace", value: 311 },
    { name: "Biotech", value: 115 },
    { name: "ECE", value: 245 },
  ];

  const colors = ["#3454ee", "#ff4444"];
  const colors2 = ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"];

  return (
    <div>
      <NewNav />
      <div className="new-dash-body">
        <div className="dash-row">
          <div className="dash-col1" style={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "left",
            }}>
            <h1 className="dash-header" style={{ textAlign: "left" }}>
              EVENT INFO
            </h1>
            <h1 className="event-main-name" style={{ textAlign: "left" }}>
              Hackathon
            </h1>
            <h1
              className="event-main-name"
              style={{
                fontSize: "5vh",
                textAlign: "left",
                color: "black",
                opacity: "0.5",
                fontWeight: "600",
              }}
            >
              7th October, 2020
            </h1>
            <h1
              className="event-main-name"
              style={{
                fontSize: "5vh",
                textAlign: "left",
                color: "black",
                opacity: "0.5",
                fontWeight: "600",
              }}
            >
              11:00 AM
            </h1>
            <br />
            <p
              style={{
                fontSize: "3vh",
                textAlign: "left",
                color: "black",
                opacity: "0.5",
              }}
            >
              5 Days To Go!
            </p>
            <br />
            <button
              style={{ margin: "0", marginBottom: "3vh", width: "30%" }}
              className="edit"
            >
              Edit Details
            </button>
          </div>
          <div className="dash-col2">
            <h1 className="dash-header" style={{ textAlign: "left" }}>
              NUMBER OF REGISTRATIONS
            </h1>
            <PieChart width={240} height={250} margin="none">
              <Pie
                data={data01}
                dataKey="value"
                cx={130}
                cy={100}
                outerRadius={70}
                innerRadius={60}
                paddingAngle={3}
                fill="#8884d8"
                label
              >
                {data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
              <Tooltip />
            </PieChart>
            <p style={{ color: "#3454ee", marginTop: "5vh", textAlign: "left" }}>
              Venue Capacity <b>1400</b>
            </p>
          </div>
          <div className="dash-col2">
            <h1 className="dash-header" style={{ textAlign: "left" }}>
              UPCOMING EVENTS
            </h1>
            <div className="event-list-div">
              <div className="event-box" style={{ flexShrink: "0" }}>
                <p className="event-head">Event Name</p>
                <p className="event-subtext">1st October</p>
              </div>
              <div className="event-box">
                <p className="event-head">Event Name</p>
                <p className="event-subtext">1st October</p>
              </div>
              <div className="event-box">
                <p className="event-head">Event Name</p>
                <p className="event-subtext">1st October</p>
              </div>
              <div className="event-box">
                <p className="event-head">Event Name</p>
                <p className="event-subtext">1st October</p>
              </div>
              <div className="event-box">
                <p className="event-head">Event Name</p>
                <p className="event-subtext">1st October</p>
              </div>
              <div className="event-box">
                <p className="event-head">Event Name</p>
                <p className="event-subtext">1st October</p>
              </div>
              <div className="event-box">
                <p className="event-head">Event Name</p>
                <p className="event-subtext">1st October</p>
              </div>
              <div className="event-box" style={{ flexShrink: "0" }}>
                <p className="event-head">Event Name</p>
                <p className="event-subtext">1st October</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dash-row">
          <div
            className="dash-col1"
          >
            <h1 className="dash-header" style={{ textAlign: "left" }}>
              REGISTRATIONS BY WEEK
            </h1>
            <p style={{ color: "#3454ee", textAlign: "left" }}>
              This Week: 785
            </p>
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
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="name" />
              <YAxis dataKey="Registrations" tickCount={10} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Registrations" stroke="#3545ee" />
            </LineChart>
          </div>
          <div className="dash-col2">
            <h1 className="dash-header" style={{ textAlign: "left" }}>
              REGISTRATIONS BY BRANCH
            </h1>
            <PieChart width={240} height={250} marginTop={30}>
              <Pie
                data={data02}
                dataKey="value"
                cx={130}
                cy={100}
                outerRadius={70}
                fill="#8884d8"
                innerRadius={60}
                paddingAngle={3}
                label
              >
                {data02.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors2[index % colors2.length]}
                  />
                ))}
              </Pie>
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
              <Tooltip />
            </PieChart>
          </div>
          <div style={{ textAlign: "left" }} className="dash-col2">
            <h1 className="dash-header" style={{ textAlign: "left", marginBottom: "5vh" }}>
              OTHER DETAILS
            </h1>
            <h3
              className="dash-header"
              style={{
                opacity: ".9",
                fontWeight: "800",
                color: "black",
                fontSize: "3vh",
                color: "#3454ee"
              }}
            >
              Year-wise breakdown
            </h3>
            <p>
              1st Year <b style={{ color: "#3454ee" }}>157</b>
            </p>
            <p>
              2nd Year <b style={{ color: "#3454ee" }}>234</b>
            </p>
            <p>
              3rd Year <b style={{ color: "#3454ee" }}>175</b>
            </p>
            <p style={{marginBottom: "5vh"}}>
              4th Year <b style={{ color: "#3454ee" }}>95</b>
            </p>
            <h3
              className="dash-header"
              style={{
                opacity: ".9",
                fontWeight: "800",
                color: "black",
                fontSize: "3vh",
                marginTop: "3vh",
                color: "#3454ee"
              }}
            >
              E-mail Invitations
            </h3>
            <p>
              Sent <b style={{ color: "#3454ee" }}>455</b>
            </p>
            <p>
              Pending <b style={{ color: "#3454ee" }}>455</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDash;
