
import React, { forwardRef, useRef, useImperativeHandle }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BasicInfo from '../PatientBooking/BasicInfo';
import Eligibility from '../PatientBooking/Eligibility';
import HealthInfo from '../PatientBooking/HealthInfo';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'



const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(700 + theme.spacing(2) * 2)]: {
      width: '100%',
      
      marginLeft: 'auto',
      marginRight: 'auto',
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
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },

  
}));




export default function StaffBooking(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const [appointmentData, setAppointmentData] = React.useState({
    patientInfo:  {
      firstName : '',
      lastName: '',
      email: '',
      phoneNumber: '',
      preffered : {
        date: new Date(),
        location: '',
        vaccine: '',
      },
      contactConsent: false,
    },

    healthInfoQuestions : [
      {
        question : 'Are you pregnant, breastfeeding or planning to become pregant?',
        answer: '',
        example: ''
      }, 
      {
        question : 'Do you have chronic medical condition?',
        answer: '',
        example: 'e.g. high or low blood pressure, diabites, sezuire, etc.'
      },
      {
        question : 'Do you have weekened immune system due to a medical condition?',
        answer: '',
        example: ''
      },
      {
        question : 'Do you live with someone who has a chronic medical condition?',
        answer: '',
        example: ''
      },
    ],
  
    eligibleQuestions : [
      {
        question : 'Are you a Healthcare Worker or an Essential Caregiver?',
        answer: '',
        example: 'e.g. doctor, nurses, paramedic, physician, pharmacist, hospital workers, etc.'
      }, 
      {
        question : 'Are you a Frontline or Essential Worker?',
        answer: '',
        example: 'e.g. police, fire fighter, food supply worker, first responder, officers, etc.'
      },
      {
        question : 'Are you above 18 years old?',
        answer: '',
        example: 'note: to be eligible, your 18th birthday must be before vaccination day'
      },
      {
        question : 'Is this your 1st dose?',
        answer: '',
        example: "note: choose 'No' if this is not your first time"
      },

    ]  
  });



 



  return (
    
    <div>
      
      <main className={classes.layout}>
        
        <Paper className={classes.paper} style={{backgroundColor: ' #e6f2ff'}}>

          <div style={{float: 'right'}}>
          <Button
            variant="contained"
            size='small'
            //onClick={handleNext}
            onClick={props.handleFullScreen.active?props.handleFullScreen.exit:props.handleFullScreen.enter}   
          >
            {props.handleFullScreen.active?'Exit':'Fullscreen '}
            &nbsp;
            <FontAwesomeIcon icon={props.handleFullScreen.active?faCompress:faExpand} />

          </Button>
          </div>

          <Typography component="h1" variant="h4" align="center">
            COVID-19 Vaccine Phone Booking (for staff)
          </Typography>
          <br></br>

          <Grid container spacing={5}>
            
            <Grid container item xs={12} md={5} lg={5} >
              <BasicInfo appointmentData={appointmentData} setAppointmentData={setAppointmentData}/>
              
            </Grid>
           

            <Grid container item xs={12} md={7} lg={7}>

              <Grid container>
                <Grid container item xs={1} md={1} lg={1} >
                  <Divider orientation="vertical" flexItem />
                </Grid>
                <Grid container item xs={11} md={11} lg={11} >
                  <div>               
                  <Eligibility appointmentData={appointmentData} setAppointmentData={setAppointmentData}/>
                  <hr></hr>
                  <HealthInfo appointmentData={appointmentData} setAppointmentData={setAppointmentData} />              
                  
                  
                  <div className={classes.buttons}>
                    <Button 
                      //onClick={handleBack} 
                      className={classes.button}>
                      Clear
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      //onClick={handleNext}
                      className={classes.button}
                    >
                      Book now
                    </Button>
                  </div>
                  
                  </div>

                </Grid>
                
              </Grid>
              
            </Grid>

            

            
          </Grid>

        </Paper>
      </main>
      
    </div>

  );
}