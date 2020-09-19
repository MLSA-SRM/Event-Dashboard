import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/nav";
import "./User.css";
import { Link, Redirect, useHistory } from "react-router-dom";

const UserPage = (props) => {
  let history = useHistory();
  // const [dub] = useState(["lol", "kdk"]);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/user").then((res) => {
      // console.log(res.data);
      // let data = [
      //   {
      //     name: "hackathon",
      //     date: "18/03/2001",
      //     status: "ongoing",
      //   },
      //   {
      //     name: "getSomeRest",
      //     date: "12/03/2001",
      //     status: "ongoing",
      //   },
      //   {
      //     name: "workshop1",
      //     date: "20/05/2020",
      //     status: "finished",
      //   },
      // ];
      let data = [];
      let date;
      let value;
      setName(res.data.name);
      res.data.events.forEach((item) => {
        date = new Date(item.date);
        if (date.getTime() < Date.now()) {
          value = 1;
        } else if (date.getTime() > Date.now()) {
          value = 0;
        }
        data.push({
          name: item.name,
          date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
          status: value,
          id: `${item.name.split(" ").join("")}`,
        });
      });
      // console.log(data);
      setData(data);
      props.handleEventChange(data);
    });
  }, []);

  const onClickRedirect = (data) => {
    history.push("/user/" + data);
  };

  return (
    <div>
      <Nav username={props.username} />
      <div className='user-body'>
        <div className='user-info'>
          <div className='user-box'>
            <h1 className='head'>My Profile</h1>
            <hr />
            <br />
            <div className='profile-pic'>
              <img src='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987'></img>
            </div>
            <br />
            <h1 className='head'>{name}</h1>
            <p className='user-text'>Software Developer</p>
            <p className='user-text'>billgates@microsoft.com</p>
            <p className='user-text'>+91 9435357748</p>
            <button className='edit'>Edit</button>
          </div>
        </div>
        <div className='event-info'>
          <div className='events'>
            <h1 className='head'>Events Conducted</h1>
            <hr />
            <div className='search-box'>
              <form>
                <input
                  id='search'
                  type='text'
                  placeholder='Search Event'
                ></input>
                <button className='search-button'>Search</button>
              </form>
            </div>
            <div className='event-list'>
              <table>
                <tr>
                  <th>Event Name</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
                {data.map((item) => (
                  <tr onClick={() => onClickRedirect(item.id)}>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    {item.status === 0 && (
                      <td>
                        <p className='yellow'>Ongoing</p>
                      </td>
                    )}

                    {item.status === 1 && (
                      <td>
                        <p className='green'>Finished</p>
                      </td>
                    )}
                  </tr>
                ))}

                {/* <tr onClick={() => onClickRedirect("hackathon")}>
                  <td>Hackathon</td>
                  <td>13/09/2020</td>
                  <td>
                    <p className="yellow">Ongoing</p>
                  </td>
                </tr> */}

                {/* <tr onClick={() => onClickRedirect("getSomeRest")}>
                  <td>GET some REST</td>
                  <td>13/09/2020</td>
                  <td>
                    <p className="yellow">Ongoing</p>
                  </td>
                </tr> */}

                {/* <tr onClick={() => onClickRedirect("workshop1")}>
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
                </tr> */}
              </table>
            </div>
          </div>
          <div className='events'>
            <h2 className='head'>Other data</h2>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
