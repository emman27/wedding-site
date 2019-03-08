import moment from "moment";
import { Countdown, RemainingTimeService } from "../../components/Timer";

const ACTUAL_DATE = moment("2019-07-20T11:00+08:00");

class Hardcoded implements RemainingTimeService {
  public getRemainingTime(): Countdown {
    const now = moment();
    const months = ACTUAL_DATE.diff(now, "months");
    const days = ACTUAL_DATE.diff(now.add(months, "month"), "day");
    const hours = ACTUAL_DATE.diff(now.add(days, "day"), "hour");
    const minutes = ACTUAL_DATE.diff(now.add(hours, "hour"), "minutes");
    const seconds = ACTUAL_DATE.diff(now.add(minutes, "minute"), "seconds");
    return {
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  }
}

export default Hardcoded;
