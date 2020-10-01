// import { ContentHook } from "@fullcalendar/react";
import React, { useState, Component } from "react";
import axios from "axios";
import marked from "marked";
import parse from "html-react-parser";
import "./style.css";
import Qr from "./qr.js";
import Qri from "./qr-img";

const Box = () => {
  const [data, setData] = useState("");
  const [primary, setPrimary] = useState("#ffffff");
  const [secondary, setSecondary] = useState("#000000");
  const [tertiary, setTertiary] = useState("#3b85b3");
  const [title, setTitle] = useState("");
  const [hey, setHey] = useState("");
  const [qr, setQr] = useState("");
  const [company, setCompany] = useState("");
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
    setTertiary("#3b85b3");
    setQr("visible: false");
  };
  const mailer = {
    background: primary,
    margin: "10%",
    width: "80%",
    height: "auto",
    color: secondary,
    padding: "5vh",
  };

  const style = {
    color: tertiary,
  };

  return (
    <div className="textBox">
      <form onSubmit={(e) => handleSubmit(e)}>
        <center>
          <div className="contenty">
            <h2>Your Company name...</h2>
            <br />
            <textarea
              name="area"
              id="area"
              cols="50"
              rows="2"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            ></textarea>
          </div>
          <br />
          <div className="contenty">
            <h2>Your Title please...</h2>
            <br />
            <textarea
              name="area"
              id="area"
              cols="50"
              rows="2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>
          <br />
          <div className="contenty">
            <h2>Your Salutation...</h2>
            <br />
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
          </div>
          <br />
          <h2>Your Mail content goes here...</h2>
          <br />
          <textarea
            name="area"
            id="area"
            cols="80"
            rows="6"
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></textarea>
          <br />
          <h2>Do you want to send a QR code ?</h2>
          {/* <center>
        <label class="switch">
        <input type="checkbox"/>
        <span class="slider round"></span>
        </label>
        </center> */}

          {/* /* Starting of QR */}
          <div className="App">
            <label className="switch">
              <input
                type="checkbox"
                onClick={(e) => {
                  setQr(e.target.checked);
                }}
                value={qr}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <br />
          <h2>Choose Your mail colours : </h2>
          <br />
          <input
            type="color"
            onChange={(e) => setPrimary(e.target.value)}
            value={primary}
            id="body"
            name="body"
          />
          <span className="tab1"></span>
          <label htmlFor="body">Primary Colour</label>
          <span className="tab"></span>
          <input
            type="color"
            value={secondary}
            onChange={(e) => setSecondary(e.target.value)}
            id="body"
            name="body"
          />
          <span className="tab1"></span>
          <label htmlFor="body">Secondary Colour</label>
          <span className="tab"></span>
          <input
            type="color"
            onChange={(e) => setTertiary(e.target.value)}
            value={tertiary}
            id="body"
            name="body"
          />
          <span className="tab1"></span>
          <label htmlFor="body">Tertiary Colour</label>
          <br />
          <button type="submit">Mail Preview</button>
        </center>
      </form>
      {/* <h2>{marked(data)}</h2> */}
      <div style={mailer}>
        <div className="headering" style={style}>
          {parse(marked(company))}
        </div>
        <div className="title">{parse(marked(title))}</div>
        <br />
        <hr />
        <br />
        <div className="hey">{parse(marked(hey))}</div>
        <br />
        <br />
        <div className="content">{parse(marked(data))}</div>
        <br />
        <div className="qr" id="qr">
          {/* <Qr/> */}
          {qr ? <Qri /> : null}
        </div>
      </div>
    </div>
  );
};

export default Box;
