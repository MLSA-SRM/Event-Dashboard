// import { ContentHook } from "@fullcalendar/react";
import React, { useState, Component } from "react";
import axios from "axios";
import marked from "marked";
import parse from "html-react-parser";
import "./style.css";
import Qr from "./qr.js";
import Qri from "./qr-img";
import MailScheduler from "./UI2.0/MailScheduler";
const Box = () => {
  const [data, setData] = useState("");
  const [primary, setPrimary] = useState("#ffffff");
  const [secondary, setSecondary] = useState("#000000");
  const [tertiary, setTertiary] = useState("#3b85b3");
  const [title, setTitle] = useState("");
  const [hey, setHey] = useState("");
  const [qr, setQr] = useState(null);
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/test/mailer", {
        data: marked(data),
        title: marked(title),
        hey: marked(hey),
        subject: marked(subject),
        primary,
        secondary,
        tertiary,
        company,
        qr,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setData("");
    setTitle("");
    setHey("");
    setPrimary("#ffffff");
    setSecondary("#000000");
    setTertiary("#3b85b3");
    setCompany("");
    setSubject("");
    setQr(false);
  };
  const mailer = {
    background: primary,
    margin: "10%",
    width: "80%",
    height: "auto",
    color: secondary,
    padding: "5vh",
    borderRadius: "10px",
    border: "solid 1px black",
  };

  const style = {
    color: tertiary,
  };

  return (
    <div className="textBox">
      <center>
        <h1 className="heading" id="mailing">
          Inviting Desk
        </h1>
        <p className="form-subtext">
          Zeit für die Party, thats German for Time to get the party started
        </p>
      </center>
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <center>
          <div className="input-div">
            <label htmlFor="area" className="labeln">
              Subject
            </label>
            <br />
            <textarea
              name="area"
              id="area"
              className="input"
              cols="70"
              rows="1"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            ></textarea>
          </div>
          <div className="contenty">
            <br />
            <div className="input-div">
              <label htmlFor="areaa" className="labelnn">
                Organisation Name
              </label>
              <label htmlFor="areaab" className="labelnnn">
                Title
              </label>
              <br />
              <textarea
                name="areaa"
                id="areaa"
                className="tbox input"
                cols="50"
                rows="1"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              ></textarea>
              <span className="tab2"></span>
              <textarea
                name="areaab"
                id="areaab"
                className="tbox input"
                cols="50"
                rows="1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
            </div>
          </div>
          <br />
          <div className="contenty">
            <br />
            {/* <textarea
                name='area'
                id='area'
                cols='20'
                rows='1'
                placeholder="Your Salutation..."
                value={hey}
                onChange={(e) => setHey(e.target.value)}
              ></textarea> */}
            <select
              name="salutation"
              value={hey}
              onChange={(e) => setHey(e.target.value)}
            >
              <option value=" ">None</option>
              <option value="Hey,">Hey,</option>
              <option value="Hello,">Hello,</option>
              <option value="Hi,">Hi,</option>
              <option value="Respected,">Respected,</option>
            </select>
          </div>
          <br />
          <br />
          <br />
          <label htmlFor="areacontent" className="labelcontent">
            Content
          </label>
          <br />
          <textarea
            name="area"
            id="areacontent"
            className="content inputn"
            cols="100"
            rows="5"
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></textarea>
          <span className="tab" />
          <div className="colour">
            <input
              type="color"
              onChange={(e) => setPrimary(e.target.value)}
              value={primary}
              id="body"
              name="body"
            />
            <span className="tab1" />
            {/* <label for='body'>Primary Colour</label> */}
            <input
              type="color"
              value={secondary}
              onChange={(e) => setSecondary(e.target.value)}
              id="body"
              name="body"
            />
            <span className="tab1" />
            {/* <label for='body'>Secondary Colour</label> */}
            <input
              type="color"
              onChange={(e) => setTertiary(e.target.value)}
              value={tertiary}
              id="body"
              name="body"
            />
            {/* <label for='body'>Tertiary Colour</label> */}
          </div>
          <br />
          <br />
          <div className="qrs">
            <h2>
              Do you want to send a QR code ?
              <span className="App">
                <label class="switch">
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      setQr(e.target.checked);
                    }}
                    value={qr}
                  />
                  <span class="slider round"></span>
                </label>
              </span>
            </h2>
          </div>
          <br />
          <br />
          <button type="submit">Mail Preview</button>
        </center>
      </form>
      <MailScheduler
        primary={primary}
        secondary={secondary}
        title={title}
        body={data}
        tertiary={tertiary}
        hey={hey}
        company={company}
        subject={subject}
      />

      {/* <h2>{marked(data)}</h2> */}
      <div style={mailer}>
        <div className="boxa">
          <span>Subject: {parse(marked(subject))}</span>
        </div>
        <hr />
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
