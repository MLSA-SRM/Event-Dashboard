import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { log } from "debug";
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

  //   const rowData = [
  //     {
  //       name: "Jatin Sachdeva",
  //       regNo: "RA1911003010721",
  //       email: "jatin9373@gmail.com",
  //       batch: "c2",
  //     },
  //     {
  //       name: "Louis Brad",
  //       regNo: "RA1911003010734",
  //       email: "loui286@gmail.com",
  //       batch: "d2",
  //     },
  //     {
  //       name: "Rakesh Rastogi",
  //       regNo: "RA1911003010732",
  //       email: "rakesh999936@gmail.com",
  //       batch: "e1",
  //     },
  //     {
  //       name: "Louis Brad",
  //       regNo: "RA1911003010734",
  //       email: "louis329936@gmail.com",
  //       batch: "d1",
  //     },
  //   ];
  const [rowDataValues, setRowDataValues] = useState(null);
  const [column, setColumn] = useState(null);
  const [dataparams, setDataParams] = useState(null);
  const [mail, setMail] = useState(null);
  useEffect(() => {
    axios.get("/table").then((res) => {
      let { header, data } = res.data;
      //   console.log(res.data);
      setColumn(header);
      setRowDataValues(data);
    });
  }, []);

  useEffect(() => {
    axios
      .post("/mailer", { data: mail })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [mail]);
  const sendMails = (e) => {
    let temp = [];
    const selectedParticipants = dataparams.getSelectedNodes();
    const selectData = selectedParticipants.map((node) => node.data);
    console.log(selectData);
    selectData.forEach((item) => {
      temp.push({
        name: item.name,
        regno: item.reg,
        email: item.email,
      });
    });
    setMail(temp);
    console.log(mail);
  };
  return (
    <div>
      <div
        className='ag-theme-material list-data'
        style={{
          height: "700px",
          width: "1000px",
        }}
      >
        <button className='sendMailsButton' onClick={sendMails}>
          Send Email To Participants
        </button>
        <AgGridReact
          animateRows
          onGridReady={(params) => setDataParams(params.api)}
          rowSelection='multiple'
          columnDefs={column}
          rowData={rowDataValues}
        />
      </div>
    </div>
  );
}
export default Table;
