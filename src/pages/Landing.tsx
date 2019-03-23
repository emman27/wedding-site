import { Card, Typography, withStyles } from "@material-ui/core";
import Button, { ButtonProps } from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";
import Timer from "../connected/Timer";
import theme from "../theme";

interface LinkButtonProps extends ButtonProps {
  to: string;
  replace?: boolean;
}

const LinkButton = (props: LinkButtonProps) => (
  <Button {...props} component={Link as any} />
);

const styles = {
  card: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 20,
    maxWidth: 450,
    marginTop: 250,
  },
};

const page = ({ classes }: any) => (
  <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}><Card className={classes.card}>
    <Timer />
    <LinkButton color="primary" variant="contained" size="large" component={Link as any} to="/rsvp">
      <Typography variant="h5">RSVP <i className="fas fa-futbol" /></Typography>
    </LinkButton>
  </Card></div>);

export default withStyles(styles)(page);
