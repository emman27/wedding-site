import moment from "moment";
import React from "react";

export interface TimerProps {
  remainingSeconds: number;
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

const Timer = ({ remainingSeconds }: TimerProps) => {
  const details = separate(remainingSeconds);
  return (
    <div>
      {details.months} months,
      {details.days} days,
      {details.hours} hours,
      {details.minutes} minutes and {details.seconds} seconds
    </div>
  );
};

export default Timer;
