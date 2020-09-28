// import { ContentHook } from "@fullcalendar/react";
import React, { useState } from "react";
import axios from "axios";
import marked from "marked";
import parse from "html-react-parser";
import "./style.css";

const Box = () => {
  const [data, setData] = useState("");
  const [primary, setPrimary] = useState("#ffffff");
  const [secondary, setSecondary] = useState("#000000");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/test/mailer", {
        data: marked(data),
        primary,
        secondary,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setData("");
    setPrimary("#ffffff");
    setSecondary("#000000");
  };
  const mailer = {
    background: primary,
    margin: "10%",
    width: "80%",
    height: "500px",
    color: secondary,
    padding: "5vh",
  };

  return (
    <div className="textBox">
      <br />
      <h1>Your Mail content goes here...</h1>
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <center>
          <textarea
            name="area"
            id="area"
            cols="80"
            rows="5"
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></textarea>
        </center>
        <br />
        <h2>Choose Your mail colours : </h2>
        <br />
        <center>
          <input
            type="color"
            onChange={(e) => setPrimary(e.target.value)}
            value={primary}
            id="body"
            name="body"
          />
          <span className="tab1"></span>
          <label for="body">Primary Colour</label>
          <span className="tab"></span>
          <input
            type="color"
            value={secondary}
            onChange={(e) => setSecondary(e.target.value)}
            id="body"
            name="body"
          />
          <span className="tab1"></span>
          <label for="body">Secondary Colour</label>
        </center>
        <button type="submit">Mail Preview</button>
      </form>
      {/* <h1>{marked(data)}</h1> */}
      <div style={mailer}>
        <div className="headering">microsoft</div>
        {parse(marked(data))}
      </div>
    </div>
  );
};

export default Box;
