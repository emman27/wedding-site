import { Card, Typography, withStyles, Icon } from "@material-ui/core";
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
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 20,
    maxWidth: 600,
    marginTop: 250,
  },
  buttons: {
    margin: theme.spacing.unit,
  },
};

const page = ({ classes }: any) => (
  <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
    <Card className={classes.card}>
      <Timer />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.797215780363!2d103.8271731505972!3d1.2962997621055108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1985b163fdc9%3A0x2a95600c683103a6!2s7+Kay+Poh+Rd%2C+Singapore+248963!5e0!3m2!1sen!2ssg!4v1562688610560!5m2!1sen!2ssg" width={300} height={225} style={{ border: 0 }}></iframe>
      <Typography variant="h6">Shuttle Bus available from Great World City Office Lobby Driveway from 9-11am.</Typography>
      <Typography variant="h6">There will be no parking space in the church</Typography>
      <div className={classes.buttons}>
        <Button
          color="primary"
          target="_blank"
          href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MzRhNWRqOTcxaGd0aW1nbGI1NDZuYjIzajkgZXlnb2hsb2x6QG0&amp;tmsrc=eygohlolz%40gmail.com"
          variant="contained">
          <Icon>event</Icon> Google Calendar
    </Button>
      </div>
    </Card>
  </div>);

export default withStyles(styles)(page);
