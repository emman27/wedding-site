import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import RsvpForm from "./pages/RsvpForm";
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
                variant="h3"
                color="inherit"
                style={{ flexGrow: 1, fontFamily: "Sharon Baker DEMO" }}
              >
                TingScoreGoh
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="App">
            <BrowserRouter>
              <Switch>
                <Route component={RsvpForm} path="/rsvp" />
                <Route component={Landing} path="/" />
              </Switch>
            </BrowserRouter>
          </div >
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
