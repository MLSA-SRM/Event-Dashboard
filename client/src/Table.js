import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
// import { log } from "debug";
function Table() {
  //   const columnDefs = [
  //     {
  //       headerName: "Name",
  //       field: "name",
  //       sortable: true,
  //       checkboxSelection: true,
  //       headerCheckboxSelection: true,
  //     },
  //     {
  //       headerName: "Reg No",
  //       field: "regNo",
  //       sortable: true,
  //     },
  //     {
  //       headerName: "Email",
  //       field: "email",
  //     },
  //   ];

  const [rowDataValues, setRowDataValues] = useState(null);
  const [column, setColumn] = useState(null);
  const [dataparams, setDataParams] = useState(null);
  // const [mail, setMail] = useState(null);
  useEffect(() => {
    axios.get("/table").then((res) => {
      let { header, data } = res.data;
      //   console.log(res.data);
      setColumn(header);
      setRowDataValues(data);
    });
  }, []);

  const sendMails = (e) => {
    let data = [];
    const selectedParticipants = dataparams.getSelectedNodes();
    const selectData = selectedParticipants.map((node) => node.data);
    // console.log(selectData);
    selectData.forEach((item) => {
      data.push({
        name: item.name,
        regno: item.reg,
        email: item.email,
      });
    });
    // console.log(data);
    axios
      .post("/mailer", { data })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
        <div className="title">
            <h1 className="titletext">Participant List</h1>
          </div>
          <div className="list-body">
        <div
          className="ag-theme-material list-data"
          style={{
            height: "50vh",
            width: "200vh",
          }}
        >
          <div className="sendMailButtonDiv">
            <button
              className="sendMailsButton"
              type="submit"
              onClick={sendMails}
            >
              Send Email To Participants
            </button>
          </div>
          <AgGridReact
            animateRows
            onGridReady={(params) => setDataParams(params.api)}
            rowSelection="multiple"
            columnDefs={column}
            rowData={rowDataValues}
          />
        </div>
      </div>
    </div>
  );
}
export default Table;
