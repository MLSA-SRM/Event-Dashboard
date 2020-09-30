import "date-fns";
import React, { useState } from "react";
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

function MailScheduler(props) {
  const eventDate = new Date("2020-01-01T00:00:00.000Z");
  const [open, setOpen] = useState();
  const [date, setDate] = useState(eventDate);
  const currDate = new Date();

  const toastMessage = () => {
    toast.info(`Emails Scheduled for ${date}`, {
      autoClose: "5000",
      position: "top-center",
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    Axios.post("/mailer")
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
              Set Date to Schedule Emails To Automatically Send
            </DialogContentText>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDateTimePicker
                variant="inline"
                value={date}
                onChange={setDate}
                onError={console.log}
                autoOk={false}
                maxDate={eventDate}
                maxDateMessage={`Date should not be after event date`}
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
