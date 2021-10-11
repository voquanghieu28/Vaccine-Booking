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
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { DataGrid } from "@material-ui/data-grid";

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

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(700 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    minHeight: 80,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3),
      minHeight: 80,
    },
  },
  paper2: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    minHeight: 200,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      minHeight: 600,
    },
  },

  cardContent: {
    minHeight: 540,
  },
}));

const steps = ["Eligibility", "Basic Info", "Health Info", "Review"];

export default function Appointments() {
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

  return (
    <div>
      <main className={classes.layout}>
        <Paper
          className={classes.paper}
          style={{ backgroundColor: "rgba(255,255,255, 0.85)" }}
        >
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
        </Paper>

        <Paper
          className={classes.paper2}
          style={{ backgroundColor: "rgba(255,255,255, 0.85)" }}
        >
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </Paper>
        <Copyright />
      </main>
    </div>
  );
}
