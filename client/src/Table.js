import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Table.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { State } from "./Context";
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
  const [open, setOpen] = useState(false);
  const [rowDataValues, setRowDataValues] = useState(null);
  const [column, setColumn] = useState(null);
  // const [dataparams, setDataParams] = useState(null);
  const { dataParams, setDataParams } = useContext(State);
  // const [mail, setMail] = useState(null);
  useEffect(() => {
    axios.get("/table").then((res) => {
      let { header, data } = res.data;
      //   console.log(res.data);
      setColumn(header);
      setRowDataValues(data);
    });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendMails = (e) => {
    let data = [];
    const selectedParticipants = dataParams.getSelectedNodes();
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

  const removeParticipants = (e) => {
    const selected = dataParams.getSelectedRows();
    const removed = dataParams.applyTransaction({ remove: selected });
    // console.log(selected);
    let eventId = JSON.parse(localStorage.getItem("test"));
    axios
      .post("/removeparticipant", { data: selected, id: eventId.data })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    handleClose();
  };
  return (
    <div>
      <div className='title'>
        {/* <h1 className='titletext'>Participant List</h1> */}
      </div>
      <div className='list-body'>
        <div
          className='ag-theme-material list-data'
          style={
            {
              // width: "200vh",
            }
          }
        >
          <div className='sendMailButtonDiv'>
            <button
              className='sendMailsButton'
              type='submit'
              onClick={sendMails}
            >
              Send Email To Participants
            </button>
            <button className='sendMailsButton' onClick={handleOpen}>
              Delete Participants
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-remove-participant'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle id='alert-remove-participant'>
                {"Are you sure you want to delete selected participants ?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  This action will be permanently delete the selected
                  participants and cannot be recovered
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color='primary'>
                  Cancel
                </Button>
                <Button onClick={removeParticipants} color='primary' autoFocus>
                  Proceed
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <AgGridReact
            animateRows
            pagination={true}
            onGridReady={(params) => setDataParams(params.api)}
            rowSelection='multiple'
            columnDefs={column}
            rowData={rowDataValues}
          />
        </div>
      </div>
      {/* <div className='sendMailButtonDiv'>
            <button
              className='sendMailsButton'
              type='submit'
              onClick={sendMails}
            >
              Send Email To Participants
            </button>
          </div> */}
    </div>
  );
}

export default Table;
