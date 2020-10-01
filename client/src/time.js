import 'date-fns';
import React from 'react';
import axios from "axios";
import marked from "marked";
import parse from "html-react-parser";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "./style.css";

export default function MaterialUIPickers() {

  const [startdate, setstartDate] = React.useState();
  const [enddate, setendDate] = React.useState();
  const [starttime, setstartTime] = React.useState();
  const [endtime, setendTime] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/test/mailer", {
        sdate: marked(startdate),
        edate: marked(enddate),
        stime: marked(starttime),
        etime: marked(endtime),
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
      setstartDate();
      setendDate();
      setstartTime();
      setendTime();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Event Start Date"
          format="MM/dd/yyyy"
          value={startdate}
          onChange={(e) => setstartDate(e.target.value)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="Event Start Time"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={enddate}
          onChange={(e) => setendDate(e.target.value)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Event Start Time"
          value={starttime}
          onChange={(e) => setstartTime(e.target.value)}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Event End Time"
          value={endtime}
          onChange={(e) => setendTime(e.target.value)}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    </form>
  );
}
