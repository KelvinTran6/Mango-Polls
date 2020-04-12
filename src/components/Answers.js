import React from 'react';
import { FormControlLabel, Grid, CardHeader, Card, Typography, CardContent, CardActions, Button, makeStyles, TextField } from '@material-ui/core';
import { RadioButtonUncheckedIcon, RadioButtonCheckedIcon } from '@material-ui/icons/RadioButtonUnchecked';
import './Answers.css'

class Answers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            state: 0
        }
    }
    render() {
        let circle

        if(1){
            circle = <h5>O</h5>
        }
        else{
            circle = <h5>X</h5>
        }

        
        return (
            <div style={{ padding: 20 }} >
                <Grid container direction="row" alignItems="center" spacing={2} >
                    <Grid>
                        <div className="circle">
                            {circle}
                        </div>
                    </Grid>
                    <Grid item>
                        <Typography>{this.props.info}</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    };
}

export default Answers;


