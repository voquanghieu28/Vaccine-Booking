import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import BasicInfo from "../PatientBooking/BasicInfo";
import Eligibility from "../PatientBooking/Eligibility";
import HealthInfo from "../PatientBooking/HealthInfo";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faCompress,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import { RadioGroup } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(700 + theme.spacing(2) * 2)]: {
      width: "100%",

      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    minHeight: 700,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      minHeight: 700,
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },

  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  formControl: {
    marginLeft: 14,
    marginRight: 6,
  },
}));

export default function PhysicianView(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const [vacineOpen, setVacineOpen] = React.useState(false);
  const [doseOpen, setDoseOpen] = React.useState(false);
  const [deltoidOpen, setDeltoidOpen] = React.useState(false);
  const handleLocationChange = (value) => {
    let newAppointmentData = Object.assign({}, appointmentData);
    newAppointmentData.patientInfo.preffered.location = value;
    setAppointmentData(newAppointmentData);
  };
  const handleVacineClose = () => {
    setVacineOpen(false);
  };
  const handleDoseClose = () => {
    setDoseOpen(false);
  };
  const handleDeltoidClose = () => {
    setDeltoidOpen(false);
  };
  const handleVacineOpen = () => {
    setVacineOpen(true);
  };
  const handleDoseOpen = () => {
    setDoseOpen(true);
  };
  const handleDeltoidOpen = () => {
    setDeltoidOpen(true);
  };

  const handleDeltoidChange = (value) => {
    let newAppointmentData = Object.assign({}, appointmentData);
    newAppointmentData.patientInfo.preffered.vaccine = value;
    setAppointmentData(newAppointmentData);
  };

  const [appointmentData, setAppointmentData] = React.useState({
    patientInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      preffered: {
        date: new Date(),
        location: "",
        vaccine: "",
      },
      contactConsent: false,
    },

    healthInfoQuestions: [
      {
        question:
          "Are you pregnant, breastfeeding or planning to become pregant?",
        answer: "YES",
        example: "",
      },
      {
        question: "Do you have chronic medical condition?",
        answer: "YES",
        example: "e.g. high or low blood pressure, diabites, sezuire, etc.",
      },
      {
        question:
          "Do you have weekened immune system due to a medical condition?",
        answer: "YES",
        example: "",
      },
      {
        question:
          "Do you live with someone who has a chronic medical condition?",
        answer: "YES",
        example: "",
      },
    ],

    eligibleQuestions: [
      {
        question: "Are you a Healthcare Worker or an Essential Caregiver?",
        answer: "YES",
        example:
          "e.g. doctor, nurses, paramedic, physician, pharmacist, hospital workers, etc.",
      },
      {
        question: "Are you a Frontline or Essential Worker?",
        answer: "YES",
        example:
          "e.g. police, fire fighter, food supply worker, first responder, officers, etc.",
      },
      {
        question: "Are you above 18 years old?",
        answer: "YES",
        example:
          "note: to be eligible, your 18th birthday must be before vaccination day",
      },
      {
        question: "Is this your 1st dose?",
        answer: "YES",
        example: "note: choose 'No' if this is not your first time",
      },
    ],
  });

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <div style={{ margin: 20 }}>
            <Grid container spacing={1}>
              <Grid item xs={9} md={9} lg={9}>
                <TextField
                  Appointment
                  ID
                  id="outlined-required"
                  label="Appointment ID"
                  variant="outlined"
                  size="small"
                  fullWidth
                  inputProps={{
                    style: {
                      height: 18,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={3} md={3} lg={3}>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  //onClick={handleNext}

                  style={{ height: 38 }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </div>
          <Divider />
          <List>
            {["John Doe", "Jackie Junnior", "Sam Smith", "Another John"].map(
              (text, index) => (
                <div>
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                  <Divider component="li" />
                </div>
              )
            )}
          </List>
        </div>
        <div style={{ flex: "1 1 auto", position: "relative" }}>
          <div
            className={classes.buttons}
            style={{ position: "absolute", bottom: 10 }}
          >
            <Button
              //onClick={handleBack}
              variant="contained"
              size="large"
              style={{ width: 380, height: 60 }}
              color="default"
              className={classes.button}
            >
              <FontAwesomeIcon icon={faQrcode} size="2x" />
              <Typography variant="h5">&nbsp; &nbsp;SCAN QR CODE</Typography>
            </Button>
          </div>
        </div>
      </Drawer>

      <main className={classes.content}>
        <Paper
          className={classes.paper}
          style={{ backgroundColor: "rgba(255,255,255, 0.8)" }}
        >
          <div style={{ float: "right" }}>
            <Button
              variant="contained"
              size="small"
              //onClick={handleNext}
              onClick={
                props.handleFullScreen.active
                  ? props.handleFullScreen.exit
                  : props.handleFullScreen.enter
              }
            >
              {props.handleFullScreen.active ? "Exit" : "Fullscreen "}
              &nbsp;
              <FontAwesomeIcon
                icon={props.handleFullScreen.active ? faCompress : faExpand}
              />
            </Button>
          </div>

          <Typography component="h1" variant="h4" align="center">
            Physician View
          </Typography>

          <br></br>

          <Grid container spacing={5} alignItems="stretch">
            <Grid item xs={12} md={7} lg={7}>
              <Typography variant="h5">Basic Info</Typography>
              <List disablePadding>
                <ListItem className={classes.listItem} key={1}>
                  <ListItemText primary={"First name"} />
                  <Typography variant="body">{"JOHN"}</Typography>
                </ListItem>
                <ListItem className={classes.listItem} key={1}>
                  <ListItemText primary={"Last name"} />
                  <Typography variant="body">{"DOE"}</Typography>
                </ListItem>
                <ListItem className={classes.listItem} key={1}>
                  <ListItemText primary={"Date of birth"} />
                  <Typography variant="body">{"20000/01/09"}</Typography>
                </ListItem>
                <ListItem className={classes.listItem} key={1}>
                  <ListItemText primary={"Gender"} />
                  <Typography variant="body">{"Male"}</Typography>
                </ListItem>
                <ListItem className={classes.listItem} key={1}>
                  <ListItemText primary={"Health card number"} />
                  <Typography variant="body">{"0123456789"}</Typography>
                </ListItem>
                <ListItem className={classes.listItem} key={1}>
                  <ListItemText primary={"Email"} />
                  <Typography variant="body">{"JOHNDOE@GMAIL.COM"}</Typography>
                </ListItem>
                <ListItem className={classes.listItem} key={1}>
                  <ListItemText primary={"Prefference vaccine"} />
                  <Typography variant="body">{"PFIZER"}</Typography>
                </ListItem>
              </List>
              <hr></hr>
              <br></br>
              <Typography variant="h5">Questionaire</Typography>
              {appointmentData.healthInfoQuestions.map((question) => (
                <ListItem className={classes.listItem} key={question.question}>
                  <ListItemText primary={question.question} />
                  <Typography variant="body">
                    {question.answer.toUpperCase()}
                  </Typography>
                </ListItem>
              ))}
            </Grid>
            <Grid container item xs={12} md={5} lg={5}>
              <Grid container>
                <Grid container item xs={1} md={1} lg={1}>
                  <Divider orientation="vertical" flexItem />
                </Grid>
                <Grid item xs={11} md={11} lg={11}>
                  <div
                    style={{
                      marginRight: 20,
                      height: "100%",
                      display: "flex",
                      flexFlow: "column",
                    }}
                  >
                    <Typography variant="h5" gutterBottom>
                      Physician Info
                    </Typography>
                    <List disablePadding>
                      <ListItem className={classes.listItem} key={1}>
                        <ListItemText primary={"Physician name"} />
                        <Typography variant="body">{"Mickie Mouse"}</Typography>
                      </ListItem>
                      <ListItem className={classes.listItem} key={1}>
                        <ListItemText primary={"Physician ID"} />
                        <Typography variant="body">{"9876543210"}</Typography>
                      </ListItem>
                    </List>
                    <br></br>
                    <hr></hr>

                    <Typography variant="h5" gutterBottom>
                      Vaccination section
                    </Typography>
                    <FormControl
                      error={false}
                      className={classes.formControl}
                      fullWidth
                    >
                      <InputLabel id="demo-controlled-open-select-label">
                        Vaccine type
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={vacineOpen}
                        onClose={handleVacineClose}
                        onOpen={handleVacineOpen}
                        value={appointmentData.patientInfo.preffered.location}
                        onChange={(e) => handleLocationChange(e.target.value)}
                      >
                        <MenuItem aria-label="None" value=""></MenuItem>
                        <MenuItem value={"Pfizer"}>Pfizer</MenuItem>
                        <MenuItem value={"Moderna"}>Moderna</MenuItem>
                        <MenuItem value={"Janssen"}>Janssen</MenuItem>
                      </Select>
                      {false ? (
                        <FormHelperText error id="my-helper-text">
                          {""}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                    <br></br>

                    <FormControl
                      error={false}
                      className={classes.formControl}
                      fullWidth
                    >
                      <InputLabel id="demo-controlled-open-select-label">
                        Doses
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={doseOpen}
                        onClose={handleDoseClose}
                        onOpen={handleDoseOpen}
                        value={appointmentData.patientInfo.preffered.location}
                        onChange={(e) => handleLocationChange(e.target.value)}
                      >
                        <MenuItem aria-label="None" value=""></MenuItem>
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                      </Select>
                      {false ? (
                        <FormHelperText error id="my-helper-text">
                          {""}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                    <br></br>

                    <FormControl
                      error={false}
                      className={classes.formControl}
                      fullWidth
                    >
                      <InputLabel id="demo-controlled-open-select-label">
                        Deltoid
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={deltoidOpen}
                        onClose={handleDeltoidClose}
                        onOpen={handleDeltoidOpen}
                        value={appointmentData.patientInfo.preffered.location}
                        onChange={(e) => handleLocationChange(e.target.value)}
                      >
                        <MenuItem aria-label="None" value=""></MenuItem>
                        <MenuItem value={"Left"}>Left</MenuItem>
                        <MenuItem value={"Right"}>Right</MenuItem>
                      </Select>
                      {false ? (
                        <FormHelperText error id="my-helper-text">
                          {""}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                    <div
                      style={{
                        flex: "1 1 auto",
                        position: "relative",
                      }}
                    >
                      <div
                        className={classes.buttons}
                        style={{ position: "absolute", bottom: 0, right: 0 }}
                      >
                        <Button
                          //onClick={handleBack}
                          variant="contained"
                          size="large"
                          style={{ width: "50%" }}
                          color="default"
                          className={classes.button}
                        >
                          Cancel Appointment
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="large"
                          style={{ width: "50%" }}
                          //onClick={handleNext}
                          className={classes.button}
                        >
                          Vaccinated
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Copyright />
      </main>
    </div>
  );
}
