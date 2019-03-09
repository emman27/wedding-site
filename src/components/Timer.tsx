import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import React from "react";

export interface TimerProps {
  remainingSeconds: number;
  classes: any;
}

function separate(remainingSeconds: number) {
  const totalDuration = moment.duration(remainingSeconds, "seconds");

  let months = totalDuration.months();
  let days = totalDuration.subtract(months, "months").days();
  let hours = totalDuration.subtract(months, "months").subtract(days, "days").hours();
  let minutes = totalDuration.subtract(months, "months").subtract(days, "days").subtract(hours, "hours").minutes();
  let seconds = totalDuration.
    subtract(months, "months").
    subtract(days, "days").
    subtract(hours, "hours").
    subtract(minutes, "minutes").
    seconds();
  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    months -= 1;
    days += moment().daysInMonth();
  }
  return {
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

const styles = () => createStyles({
  unit: {
    margin: 20,
    flexDirection: "column",
    textAlign: "center",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    // flexDirection: "row",
  },
});

const Timer = ({ remainingSeconds, classes }: TimerProps) => {
  const details = separate(remainingSeconds);
  return (
    <div>
      <div className={classes.row}>
        <span className={classes.unit}>
          <Typography variant="h2">{details.months}</Typography>
          <Typography variant="h6">MONTHS</Typography>
        </span>
        <span className={classes.unit}>
          <Typography variant="h2">{details.days}</Typography>
          <Typography variant="h6">DAYS</Typography>
        </span>
        <span className={classes.unit}>

          <Typography variant="h2">{details.hours}</Typography>
          <Typography variant="h6">HOURS</Typography>
        </span>
        <span className={classes.unit}>
          <Typography variant="h2">{details.minutes}</Typography>
          <Typography variant="h6">MINS</Typography>
        </span>
        <span className={classes.unit}>
          <Typography variant="h2">{details.seconds}</Typography>
          <Typography variant="h6">SECS</Typography>
        </span>
      </div>
    </div>
  );
};

export default withStyles(styles)(Timer);
