import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { RadioGroup } from '@material-ui/core';

export default function YesNo(props) {
    const { index, answer, setAnswer } = props
    const onOptionClick = event => {    
        setAnswer(index, event.target.value)
    };

    return (      
        <React.Fragment>
            <RadioGroup row name="isBusiness" value={answer}>
                <FormControlLabel
                    checked={answer==="yes"}
                    value={"yes"}
                    onChange={onOptionClick}
                    control={<Checkbox color="primary" />}
                    label="Yes"
                    labelPlacement="Yes" 
                />
                <FormControlLabel
                    checked={answer==="no"}
                    value={"no"}
                    onChange={onOptionClick}
                    control={<Checkbox color="primary" />}
                    label="No"
                    labelPlacement="No"
                />
            </RadioGroup>
        </React.Fragment>
    );
}