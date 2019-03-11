import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Timer from "./connected/Timer";
import Hardcoded from "./services/remaining_time/hardcoded";
import store from "./store";
import theme from "./theme";

class App extends Component {
  public componentDidMount() {
    new Hardcoded(store).start();
  }

  public render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h4"
                color="inherit"
                style={{ fontFamily: "Great Vibes", flexGrow: 1 }}
              >
                TingScoreGoh
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="App">
            <Timer />
          </div >
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
