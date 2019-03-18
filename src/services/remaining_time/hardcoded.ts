import moment from "moment";
import { Store } from "redux";
import { updateCountdown } from "../../store/countdown/actions";

const ACTUAL_DATE = moment("2019-07-20T11:00+08:00");

class Hardcoded {
  public store: Store;
  constructor(store: Store) {
    this.store = store;
  }

  public start() {
    this.updateTimer(this.store)();
    setInterval(this.updateTimer(this.store), 1000);
  }

  public updateTimer(store: Store) {
    return () => {
      store.dispatch(updateCountdown(ACTUAL_DATE.diff(moment(), "seconds")));
    };
  }
}

export default Hardcoded;
