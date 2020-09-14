import React from "react";
import Nav from "./components/nav";
import "./User.css";

const UserPage = () => {
  const eventName = [
    "Hackathon",
    "GET some REST",
    "Workshop 1",
    "ui/ux workshop",
    "MarchBytes",
    "Codestruck 1.0",
    "Webcast Live",
    "Cyber Security",
  ];
  return (
    <div>
      <Nav />
      <div className="user-body">
        <div className="user-info">
          <div className="user-box">
            <h1 className="head">My Profile</h1>
            <hr />
            <br />
            <div className="profile-pic">
              <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"></img>
            </div>
            <br />
            <h1 className="head">Bill Gates</h1>
            <p class="user-text">Software Developer</p>
            <p class="user-text">billgates@microsoft.com</p>
            <p class="user-text">+91 9435357748</p>
            <button className="edit">Edit</button>
          </div>
        </div>
        <div className="event-info">
          <div className="events">
            <h1 className="head">Events Conducted</h1>
            <hr />
            <div className="search-box">
              <form>
                <input
                  id="search"
                  type="text"
                  placeholder="Search Event"
                ></input>
                <button className="search-button">Search</button>
              </form>
            </div>
            <div className="event-list">
              <table>
                <tr>
                  <th>Event Name</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>Hackathon</td>
                  <td>13/09/2020</td>
                  <td>
                    <p className="yellow">Ongoing</p>
                  </td>
                </tr>
                <tr>
                  <td>GET some REST</td>
                  <td>13/09/2020</td>
                  <td>
                    <p className="yellow">Ongoing</p>
                  </td>
                </tr>
                <tr>
                  <td>Workshop 1</td>
                  <td>13/09/2020</td>
                  <td>
                    <p className="green">Finished</p>
                  </td>
                </tr>
                <tr>
                  <td>UI/UX workshop</td>
                  <td>13/09/2020</td>
                  <td>
                    <p className="green">Finished</p>
                  </td>
                </tr>
                <tr>
                  <td>MarchBytes</td>
                  <td>13/09/2020</td>
                  <td>
                    <p className="green">Finished</p>
                  </td>
                </tr>
                <tr>
                  <td>Codestruck 1.0</td>
                  <td>13/09/2020</td>
                  <td>
                    <p className="red">Cancelled</p>
                  </td>
                </tr>
                <tr>
                  <td>Webcast Live</td>
                  <td>13/09/2020</td>
                  <td>
                    <p className="green">Finished</p>
                  </td>
                </tr>
                <tr>
                  <td>Cyber Security</td>
                  <td>13/09/2020</td>
                  <td>
                    <p className="red">Cancelled</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="events">
            <h2 className="head">Other data</h2>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
