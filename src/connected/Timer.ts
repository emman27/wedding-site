import { connect } from "react-redux";
import Timer from "../components/Timer";

function mapStateToProps(state: any) {
  return { remainingSeconds: state.countdown.remainingSeconds };
}

export default connect(mapStateToProps)(Timer);
