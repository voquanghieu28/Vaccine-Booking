import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import YesNo from './YesNo'
import FormHelperText from '@material-ui/core/FormHelperText';

const Eligibility = ((props, ref) => {
  
  const { appointmentData, setAppointmentData } = props
  const [ validate, setValidate ] = useState(false)
  
  const setAnswer = (index, value) => {
    let newAppointmentData = Object.assign({}, appointmentData);
    newAppointmentData.eligibleQuestions[index].answer = value
    setAppointmentData(newAppointmentData)
  }

  useImperativeHandle(ref, () => ({
    validateEligibility
    
  }))


  

  const validateEligibility = () => {
    setValidate(true)
    for (const element of appointmentData.eligibleQuestions) 
      if (element.answer==='') return false
    return true;
  }
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Eligibility questions
      </Typography>
      <br></br>
     
      <Grid container spacing={3}>
        {appointmentData.eligibleQuestions.map((value, index) => {
          return  <React.Fragment key={index}>
                    <Grid item xs={12} md={8}>
                      <FormControl required={true}>
                        {value.question}
                        <br></br>
                        <Typography variant="body2" color="textSecondary">
                          {value.example}
                        </Typography>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <YesNo setAnswer={setAnswer} answer={value.answer} index={index}></YesNo>
                      {value.answer===''&&validate?<FormHelperText error id="my-helper-text">Please choose an option!</FormHelperText>:null}
                    </Grid>
                  </React.Fragment>
        })}
      </Grid>
    </div>
  );
})

export default forwardRef(Eligibility);