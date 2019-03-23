import { green, lightBlue } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9DC183",
    },
    secondary: {
      main: lightBlue[300],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
