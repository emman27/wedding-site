import React from "react";

export interface Countdown {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface RemainingTimeService {
  getRemainingTime(): Countdown;
}

export interface TimerProps {
  remainingTimeService: RemainingTimeService;
}

const Timer = ({ remainingTimeService }: TimerProps) => {
  const countdown = remainingTimeService.getRemainingTime();
  return (
    <div>
      {countdown.months} months,
      {countdown.days} days,
      {countdown.hours} hours,
      {countdown.minutes} minutes and {countdown.seconds} seconds
    </div>
  );
};

export default Timer;
