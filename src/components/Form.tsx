import {
  Button, Card, CardContent, createStyles, FormControl, InputLabel,
  MenuItem, Select, TextField, Typography, withStyles,
} from "@material-ui/core";
import React from "react";
import { RSVPService } from "../services/rsvp";

const styles = (theme: any) => createStyles({
  card: {
    maxWidth: 450,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    marginLeft: 4 * theme.spacing.unit,
    marginRight: 4 * theme.spacing.unit,
  },
  form: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  formItem: {
    flex: 1,
    margin: theme.spacing.unit,
    minWidth: 240,
  },
});

interface FormProps {
  classes: any;
  attendees: number | string;
  name: string;
  contact: string;
  onNameChange: (val: string) => void;
  onContactChange: (val: string) => void;
  onAttendeesChange: (val: number) => void;
  rsvpService: RSVPService;
}

interface FormState {
  labelWidth: number;
}

const Form = ({ classes, name, attendees, contact,
  onNameChange, onAttendeesChange, onContactChange,
  rsvpService }: FormProps) => {
  const formComplete = name !== "" && attendees !== "" && contact !== "";
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5">RSVP</Typography>
        <form autoComplete="off" className={classes.form}>
          <TextField
            label="Your Name"
            variant="outlined"
            className={classes.formItem}
            value={name}
            onChange={(event) => onNameChange(event.target.value)}
          />
          <TextField
            label="Your Contact"
            variant="outlined"
            className={classes.formItem}
            value={contact}
            onChange={(event) => onContactChange(event.target.value)}
          />
          <div style={{ marginBottom: 10 }}>
            <FormControl className={classes.formItem}>
              <InputLabel htmlFor="age-simple">How many people are coming?</InputLabel>
              <Select
                value={attendees}
                onChange={(event) => onAttendeesChange(event.target.value as unknown as number)}
                inputProps={{
                  name: "attendees",
                  id: "attendees",
                }}
              >
                <MenuItem value={0}>I can't come :(</MenuItem>
                <MenuItem value={1}>Just me</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button
            color="primary"
            variant="contained"
            size="large"
            disabled={!formComplete}
            onClick={() => { rsvpService.submitRSVP({ name, contact, numberOfAttendees: attendees as number }); }}
          >
            <Typography variant="h5">Done! <i className="fas fa-futbol" /></Typography>
          </Button>
        </form>
      </CardContent>
    </Card >
  );
};

export default withStyles(styles)(Form);
