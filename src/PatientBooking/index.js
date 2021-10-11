import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import BasicInfo from "./BasicInfo";
import Eligibility from "./Eligibility";
import HealthInfo from "./HealthInfo";
import Review from "./Review";

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

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(700 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    minHeight: 600,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      minHeight: 600,
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    backgroundColor: "transparent",
  },
  cardContent: {
    minHeight: 540,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Eligibility", "Basic Info", "Health Info", "Review"];

export default function PatientBooking() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
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
        answer: "",
        example: "",
      },
      {
        question: "Do you have chronic medical condition?",
        answer: "",
        example: "e.g. high or low blood pressure, diabites, sezuire, etc.",
      },
      {
        question:
          "Do you have weekened immune system due to a medical condition?",
        answer: "",
        example: "",
      },
      {
        question:
          "Do you live with someone who has a chronic medical condition?",
        answer: "",
        example: "",
      },
    ],

    eligibleQuestions: [
      {
        question: "Are you a Healthcare Worker or an Essential Caregiver?",
        answer: "",
        example:
          "e.g. doctor, nurses, paramedic, physician, pharmacist, hospital workers, etc.",
      },
      {
        question: "Are you a Frontline or Essential Worker?",
        answer: "",
        example:
          "e.g. police, fire fighter, food supply worker, first responder, officers, etc.",
      },
      {
        question: "Are you above 18 years old?",
        answer: "",
        example:
          "note: to be eligible, your 18th birthday must be before vaccination day",
      },
      {
        question: "Is this your 1st dose?",
        answer: "",
        example: "note: choose 'No' if this is not your first time",
      },
    ],
  });

  const child = useRef();

  const getStepContent = (step, appointmentData, setAppointmentData) => {
    switch (step) {
      case 0:
        return (
          <Eligibility
            ref={child}
            appointmentData={appointmentData}
            setAppointmentData={setAppointmentData}
          />
        );
      case 1:
        return (
          <BasicInfo
            ref={child}
            appointmentData={appointmentData}
            setAppointmentData={setAppointmentData}
          />
        );
      case 2:
        return (
          <HealthInfo
            ref={child}
            appointmentData={appointmentData}
            setAppointmentData={setAppointmentData}
          />
        );
      case 3:
        return (
          <Review
            appointmentData={appointmentData}
            setAppointmentData={setAppointmentData}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        if (child.current) {
          if (!child.current.validateEligibility()) return;
        }
        break;
      case 1:
        if (child.current) {
          if (!child.current.validateBasicInfo()) return;
        }
        break;
      case 2:
        if (child.current) {
          if (!child.current.validateHealthInfo()) return;
        }
        break;
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <main className={classes.layout}>
        <Paper
          className={classes.paper}
          style={{ backgroundColor: "rgba(255,255,255, 0.85)" }}
        >
          <Typography component="h1" variant="h4" align="center">
            COVID-19 Vaccination Booking
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for booking appointment with us.
                </Typography>
                <Typography variant="subtitle1">
                  Your appointment number is #123456. We will emailed your
                  appointment confirmation shortly. And send you when we have
                  new updates.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className={classes.cardContent}>
                  {getStepContent(
                    activeStep,
                    appointmentData,
                    setAppointmentData
                  )}
                </div>
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Book Now" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </div>
  );
}
