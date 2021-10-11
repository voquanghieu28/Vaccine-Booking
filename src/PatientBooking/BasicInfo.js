import 'date-fns';
import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { RadioGroup } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}));


const BasicInfo = ((props, ref) => {
  const classes = useStyles();
  const { appointmentData, setAppointmentData } = props
  const [open, setOpen] = React.useState(false);

  const handleDateChange = (date) => { 
    let newAppointmentData = Object.assign({}, appointmentData);
    newAppointmentData.patientInfo.preffered.date = date
    setAppointmentData(newAppointmentData)
  };
  
  const handleLocationChange = (value) => { 
    let newAppointmentData = Object.assign({}, appointmentData);
    newAppointmentData.patientInfo.preffered.location = value
    setAppointmentData(newAppointmentData)
  };
  const handleLocationPickerClose = () => { setOpen(false); };
  const handleLocationPickerOpen = () => { setOpen(true); };
  
  const handleFirstNameChange = (value, key) => { 
    let newAppointmentData = Object.assign({}, appointmentData);
    newAppointmentData.patientInfo[key] = value
    setAppointmentData(newAppointmentData)
   };

   const handleVaccineChange = (value) => { 
    let newAppointmentData = Object.assign({}, appointmentData);
    newAppointmentData.patientInfo.preffered.vaccine = value
    setAppointmentData(newAppointmentData)
  };

  const handleConsentChange = (value) => { 
    let newAppointmentData = Object.assign({}, appointmentData);
    newAppointmentData.patientInfo.contactConsent = value
    setAppointmentData(newAppointmentData)
  };

  const [ firstNameError, setFirstNameError ] = useState('')
  const [ lastNameError, setLastNameError ] = useState('')
  const [ emailError, setEmailError ] = useState('')
  const [ phoneError, setPhoneError ] = useState('')
  const [ locationError, setLocationError ] = useState('')
  const [ vaccineError, setVaccineError ] = useState('')
  const [ consentError, setConsentError ] = useState(false)

  useImperativeHandle(ref, () => ({
    validateBasicInfo
    
  }))

  const validateBasicInfo = () => {
   
    let isValid = true
    if(appointmentData.patientInfo.firstName=='') {
      setFirstNameError('This field cannot be empty')
      isValid = false
    } else 
      setFirstNameError('')


    if(appointmentData.patientInfo.lastName==''){
      setLastNameError('This field cannot be empty')
      isValid = false
    }else 
      setLastNameError('')

    if(appointmentData.patientInfo.email==''){
      setEmailError('This field cannot be empty')
      isValid = false
    }else 
      setEmailError('')

    if(appointmentData.patientInfo.phoneNumber==''){
      setPhoneError('This field cannot be empty')
      isValid = false
    }else 
      setPhoneError('')

    if(appointmentData.patientInfo.preffered.location==''){
      setLocationError('Please choose a location')
      isValid = false
    }else 
      setLocationError('')


    if(appointmentData.patientInfo.preffered.vaccine==''){
      setVaccineError('Please choose a Vaccine')
      isValid = false
    }else 
      setVaccineError('')

    if(appointmentData.patientInfo.contactConsent==false){
      setConsentError('Please consent to be contacted further for vaccination purposes')
      isValid = false
    }else 
      setConsentError('')

    
    return isValid;
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Basic Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField equired fullWidth
            label="First name"
            onChange={(e) => {handleFirstNameChange(e.target.value, 'firstName')}}
            value={appointmentData.patientInfo.firstName}
            helperText={firstNameError}
            error={firstNameError!=''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField equired fullWidth
            label="Last name"
            onChange={(e) => {handleFirstNameChange(e.target.value, 'lastName')}}
            value={appointmentData.patientInfo.lastName}
            helperText={lastNameError}
            error={lastNameError!=''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField equired fullWidth
            label="Email"
            onChange={(e) => {handleFirstNameChange(e.target.value, 'email')}}
            value={appointmentData.patientInfo.email}
            helperText={emailError}
            error={emailError!=''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField equired fullWidth
            label="Phone number"
            onChange={(e) => {handleFirstNameChange(e.target.value, 'phoneNumber')}}
            value={appointmentData.patientInfo.phoneNumber}
            helperText={phoneError}
            error={phoneError!=''}
          />
        </Grid>
        
      </Grid>

      <br></br>
      <Typography variant="h6" gutterBottom>
        Vaccination prefference
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <Grid container>
              <KeyboardDatePicker fullWidth
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={appointmentData.patientInfo.preffered.date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />      
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6} >
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <Grid container>                
              <KeyboardTimePicker fullWidth
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={appointmentData.patientInfo.preffered.date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl error={locationError!=''} className={classes.formControl} fullWidth>
            <InputLabel id="demo-controlled-open-select-label">Location</InputLabel>
            <Select 
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleLocationPickerClose}
              onOpen={handleLocationPickerOpen}
              value={appointmentData.patientInfo.preffered.location}
              onChange={e => handleLocationChange(e.target.value)}>
              <MenuItem aria-label="None" value="" ></MenuItem>
              <MenuItem value={'Eva James Memorial Centre'}>Eva James Memorial Centre</MenuItem>
              <MenuItem value={'Nepean Sportsplex - Halls A + B'}>Nepean Sportsplex - Halls A + B</MenuItem>
              <MenuItem value={'Orleans Ruddy Family YMCA-YWCA'}>Orleans Ruddy Family YMCA-YWCA</MenuItem>
              <MenuItem value={'Ottawa City Hall'}>Ottawa City Hall</MenuItem>
            </Select>
            {locationError!=''?<FormHelperText error id="my-helper-text">{locationError}</FormHelperText>:null}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          
              <InputLabel error={vaccineError!=''} id="demo-controlled-open-select-label">Preffered Vaccine</InputLabel>
              <RadioGroup
                name="isBusiness"
                //value={value}
                row
                label="foo"
              >
                <FormControlLabel
                    checked={appointmentData.patientInfo.preffered.vaccine==="Pfizer"}
                    value={"Pfizer"}
                    onChange={(e) => {handleVaccineChange(e.target.value)}}
                    control={<Checkbox color="primary" />}
                    label="Pfizer"
                    labelPlacement="Yes"
                />
                <FormControlLabel
                    checked={appointmentData.patientInfo.preffered.vaccine==="Moderna"}
                    value={"Moderna"}
                    onChange={(e) => {handleVaccineChange(e.target.value)}}
                    control={<Checkbox color="primary" />}
                    label="Moderna"
                    labelPlacement="No"
                />
                <FormControlLabel
                    checked={appointmentData.patientInfo.preffered.vaccine==="Janssen"}
                    value={"Janssen"}
                    onChange={(e) => {handleVaccineChange(e.target.value)}}
                    control={<Checkbox color="primary" />}
                    label="Janssen"
                    labelPlacement="No"
                />
              </RadioGroup>

              {vaccineError!=''?<FormHelperText error id="my-helper-text">{vaccineError}</FormHelperText>:null}
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" onChange={(e) => {handleConsentChange(e)}} checked={appointmentData.patientInfo.contactConsent} />}
              label="I agree to be contacted using the information above for vaccination purposes"
            />
            {consentError!=''?<FormHelperText error id="my-helper-text">{consentError}</FormHelperText>:null}
          </Grid>

      </Grid>
    </div>
  );
})
export default forwardRef(BasicInfo);