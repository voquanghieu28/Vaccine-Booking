import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(0, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();
  const { appointmentData, setAppointmentData } = props

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Appointment summary
      </Typography>
      <hr></hr>
      <List disablePadding>
        {appointmentData.eligibleQuestions.map((question) => (
            <ListItem className={classes.listItem} key={question.question}>
                <ListItemText primary={question.question}  />
                <Typography variant="body2">{question.answer.toUpperCase()}</Typography>
            </ListItem>
        ))}
        <hr></hr>
 
        {appointmentData.healthInfoQuestions.map((question) => (
            <ListItem className={classes.listItem} key={question.question}>
                <ListItemText primary={question.question}  />
                <Typography variant="body2">{question.answer.toUpperCase()}</Typography>
            </ListItem>
        ))}
        <hr></hr>

        
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Contact info
          </Typography>
          <Typography gutterBottom>{appointmentData.patientInfo.firstName} {appointmentData.patientInfo.lastName}</Typography>
          <Typography gutterBottom>{appointmentData.patientInfo.email}</Typography>
          <Typography gutterBottom>{appointmentData.patientInfo.phoneNumber}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Prefference
          </Typography>
          <Grid container>
            <Grid item xs={6}>
                <Typography gutterBottom>Date</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom>{appointmentData.patientInfo.preffered.date.toString().substring(0,16)}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom>Time</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom>{appointmentData.patientInfo.preffered.date.toString().split(' ')[4]}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom>Vaccine</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom>{appointmentData.patientInfo.preffered.vaccine}</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography gutterBottom>Location</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom>{appointmentData.patientInfo.preffered.location}</Typography>
            </Grid>
            
            
            
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}