import React from 'react';
import { Grid, CardHeader, Card, Typography, CardContent, CardActions, Button, makeStyles, TextField } from '@material-ui/core';
import axios from 'axios'
import './polls.css'
import Answers from './Answers'




class Poll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers:[]
    }
  }

  componentDidMount(){
    let allAnswers = []
    const answers = this.props.info.description 
    answers.forEach(answer =>{
      const current = <Answers info={answer}/>
      allAnswers.push(current)
    })
    this.setState({answers:allAnswers})
  }


  render() {
    return (
      <div className="card">
        <Card>
          <CardHeader
            titleTypographyProps={{ variant: 'h5' }}
            title={this.props.info.title}
            subheader="September 14, 2016"
          />
          <CardContent>
            {this.state.answers}
          </CardContent>
        </Card>
      </div>
    )
  };
}

export default Poll;


