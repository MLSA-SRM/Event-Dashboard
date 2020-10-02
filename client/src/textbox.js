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
        tertiary,
        title,
        hey,
        company,
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
    <div className='textBox'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <center>
          <div className='contenty'>
            <br />
            <textarea
              name='area'
              id='area'
              placeholder="Your Organisation Name..."
              className="tbox"
              cols='50'
              rows='1'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            ></textarea>
            <span className='tab2'></span>
            <textarea
              name='area'
              id='area'
              className="tbox"
              placeholder="Your Title please..."
              cols='50'
              rows='1'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>
          <br />
          <div className='contenty'>
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
              <select name="salutation" value={hey}
                onChange={(e) => setHey(e.target.value)}>
              <option value=" ">None</option>
              <option value="Hey,">Hey,</option>
              <option value="Hello,">Hello,</option>
              <option value="Hi,">Hi,</option>
              <option value="Respected,">Respected,</option>
              </select>
          </div>
          <br />
          <br />
          <textarea
            name='area'
            id='area'
            cols='80'
            rows='6'
            placeholder="Your Mail content goes here..."
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></textarea>
          <br />
          <h2>Choose Your mail colours : </h2>
          <br />
          <input
            type='color'
            onChange={(e) => setPrimary(e.target.value)}
            value={primary}
            id='body'
            name='body'
          />
          <span className='tab1'></span>
          <label for='body'>Primary Colour</label>
          <span className='tab'></span>
          <input
            type='color'
            value={secondary}
            onChange={(e) => setSecondary(e.target.value)}
            id='body'
            name='body'
          />
          <span className='tab1'></span>
          <label for='body'>Secondary Colour</label>
          <span className='tab'></span>
          <input
            type='color'
            onChange={(e) => setTertiary(e.target.value)}
            value={tertiary}
            id='body'
            name='body'
          />
          <span className='tab1'></span>
          <label for='body'>Tertiary Colour</label>
          <br />
          <br />
          <div className="qrs">
          <h2>Do you want to send a QR code ?
          <span className='App'>
            <label class='switch'>
              <input
                type='checkbox'
                onClick={(e) => {
                  setQr(e.target.checked);
                }}
                value={qr}
              />
              <span class='slider round'></span>
            </label>
          </span>
          </h2>
          </div>
          <br/>
          <br/>
          <button type='submit'>Mail Preview</button>
        </center>
      </form>
      {/* <h2>{marked(data)}</h2> */}
      <div style={mailer}>
        <div className='headering' style={style}>
          {parse(marked(company))}
        </div>
        <div className='title'>{parse(marked(title))}</div>
        <br />
        <hr />
        <br />
        <div className='hey'>{parse(marked(hey))}</div>
        <br />
        <br />
        <div className='content'>{parse(marked(data))}</div>
        <br />
        <div className='qr' id='qr'>
          {/* <Qr/> */}
          {qr ? <Qri /> : null}
        </div>
      </div>
    </div>
  );
};

export default Box;
