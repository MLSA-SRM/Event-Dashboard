import "date-fns";
import React, { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ToastContainer, toast } from "react-toastify";
import Axios from "axios";
import { State } from "../Context";

function MailScheduler(props) {
  const eventDate = new Date("2022/09/30 23:00:00");
  const [open, setOpen] = useState();
  const [date, setDate] = useState(eventDate);
  const { dataParams } = useContext(State);
  const toastMessage = () => {
    toast.success(`Emails Scheduled`, {
      autoClose: "5000",
      position: "bottom-left",
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let timeLeft = Math.abs(date - new Date());
  const handleSubmit = () => {
    let data = [];
    const selectedParticipants = dataParams.getSelectedNodes();
    const selectData = selectedParticipants.map((node) => node.data);
    selectData.forEach((item) => {
      data.push({
        name: item.name,
        regno: item.reg,
        email: item.email,
      });
    });
    Axios.post("/mailer", { timeLeft, data })
      .then(() => console.log("sent"))
      .catch((err) => console.log(err));

    handleClose();
    toastMessage();
  };
  return (
    <div>
      <Grid container justify="space-around">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Schedule Emails
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Schedule Emails</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Set date and time for scheduling emails
            </DialogContentText>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDateTimePicker
                variant="inline"
                value={date}
                onChange={setDate}
                onError={console.log}
                autoOk={false}
                maxDate={eventDate}
                maxDateMessage={`Set Schedule Date Before Event date`}
                format="yyyy/MM/dd HH:mm"
              />
            </MuiPickersUtilsProvider>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              SChedule
            </Button>
          </DialogActions>
        </Dialog>
        <ToastContainer position={"bottom-right"} />
      </Grid>
    </div>
  );
}

export default MailScheduler;
