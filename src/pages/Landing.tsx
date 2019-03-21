import { Typography } from "@material-ui/core";
import Button, { ButtonProps } from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";
import Timer from "../connected/Timer";

interface LinkButtonProps extends ButtonProps {
  to: string;
  replace?: boolean;
}

const LinkButton = (props: LinkButtonProps) => (
  <Button {...props} component={Link as any} />
);

export default () => (<div>
  <Timer />
  <LinkButton color="primary" variant="contained" size="large" component={Link as any} to="/rsvp">
    <Typography variant="h5">RSVP <i className="fas fa-futbol" /></Typography>
  </LinkButton>
</div>);
