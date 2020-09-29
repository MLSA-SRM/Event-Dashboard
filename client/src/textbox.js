// import { ContentHook } from "@fullcalendar/react";
import React, { useState,Component } from "react";
import axios from "axios";
import marked from "marked";
import parse from "html-react-parser";
import "./style.css";
import Qr from './qr.js';
import Qri from './qr-img';

const Box = () => {
  const [data, setData] = useState("");
  const [primary, setPrimary] = useState("#ffffff");
  const [secondary, setSecondary] = useState("#000000");
  const [title, setTitle] = useState("");
  const [hey, setHey] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/test/mailer", {
        data: marked(data),
        title: marked(title),
        hey: marked(hey),
        primary,
        secondary,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setData("");
    setTitle("");
    setHey("");
    setPrimary("#ffffff");
    setSecondary("#000000");
  };
  const mailer = {
    background: primary,
    margin: "10%",
    width: "80%",
    height: "auto",
    color: secondary,
    padding: "5vh",
  };

  return (
    <div className="textBox">
      <br />
      <center>
      <h1>Your Title please...</h1>
      <br/>
      <textarea
            name="area"
            id="area"
            cols="50"
            rows="2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
      <br/>
      <h1>Your Salutation...</h1>
      <br/>
      <center>
        <div className="tooltip">
      <textarea
            name="area"
            id="area"
            cols="20"
            rows="1"
            value={hey}
            onChange={(e) => setHey(e.target.value)}
          ></textarea>
          <span className="tooltiptext">Just the salutation, no name</span>
          </div>
      </center>
      <br/>
      <h1>Your Mail content goes here...</h1>
      <br />
      </center>
      <form onSubmit={(e) => handleSubmit(e)}>
        <center>
          <textarea
            name="area"
            id="area"
            cols="80"
            rows="6"
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></textarea>
        </center>
        <br/>
        {/* <h1>Do you want to send a QR code ?</h1>
        <center>
        <label class="switch">
        <input type="checkbox"/>
        <span class="slider round"></span>
        </label>
        </center> */}
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
        <div className="title">
        {parse(marked(title))}
        </div>
        <br/>
        <hr/>
        <br/>
        <div className="hey">
          {parse(marked(hey))}
        </div>
        <br/>
        <br/>
        <div className="content">
        {parse(marked(data))}
        </div>
        <br/>
        <div className="qr" id="qr">
          <Qr/>
        </div>
      </div>
    </div>
  );
};

export default Box;
