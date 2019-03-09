import { green, lightBlue } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[300],
    },
    secondary: {
      main: lightBlue[300],
    },
  },
});

export default theme;
