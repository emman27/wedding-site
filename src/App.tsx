import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Timer from "./connected/Timer";
import Hardcoded from "./services/remaining_time/hardcoded";
import store from "./store";

class App extends Component {
  public componentDidMount() {
    new Hardcoded(store).start();
  }

  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Timer />
        </div >
      </Provider>
    );
  }
}

export default App;
