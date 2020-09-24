import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/light.css";

const OtherDetails = () => {
  return (
    <Tippy
      theme="light"
      animation="scale"
      content="This tab shows other details (email info and year wise data)."
    >
      <div style={{ textAlign: "left" }} className="dash-col2">
        <h1
          className="dash-header"
          style={{ textAlign: "left", marginBottom: "5vh" }}
        >
          OTHER DETAILS
        </h1>
        <h3 className="dash-header style1">Year-wise breakdown</h3>
        <p>
          1st Year <b className="color1">157</b>
        </p>
        <p>
          2nd Year <b className="color1">234</b>
        </p>
        <p>
          3rd Year <b className="color1">175</b>
        </p>
        <p style={{ marginBottom: "5vh" }}>
          4th Year <b className="color1">95</b>
        </p>
        <h3 className="dash-header style1">E-mail Invitations</h3>
        <p>
          Sent <b className="color1">455</b>
        </p>
        <p>
          Pending <b className="color1">455</b>
        </p>
      </div>
    </Tippy>
  );
};

export default OtherDetails;
