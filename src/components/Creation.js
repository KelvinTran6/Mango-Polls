import React from 'react';
import { Grid, Card, Typography, CardContent, CardActions, Button, makeStyles, TextField } from '@material-ui/core';
import axios from 'axios'
import Poll from './Poll'
import './polls.css'




class Creation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      answer: '',
      answers: [],
      abber: []
    }
  }

  submit = () => {

    if(this.state.title == ''){
      alert("title cannot be empty!")
      return;
    }

    if(this.state.abber.length <2){
      alert("there must be atleast two answers")
      return
    }

    const data = {
      title: this.state.title,
      description: this.state.abber
    }

    axios.post('http://localhost:5000/polls/add', data)
      .then(res => console.log(res.data));

    alert("poll has been created")
    window.location.reload();
  }
  addAnswer = () => {
    let current = this.state.answers
    const answer = this.state.answer
    let length = answer.length
    console.log(length)
    if (length == 0) {
      alert("please enter an answer")
      return
    }



    current.push(answer)
    this.setState({ answers: current })
    console.log(current)
  }

  add() {
    this.setState({ abber: [...this.state.abber, ""] }
    )
  }

  remove(index) {
    this.state.abber.splice(index, 1)
    this.setState({ abber: this.state.abber })
  }

  changeTitle = (e) => {
    this.setState({ title: e.target.value })
    console.log(this.state.title)
  }
  onChangeAnswers = (e, index) => {
    this.state.abber[index] = e.target.value
    this.setState({ abber: this.state.abber })
  }


  render() {
    return (
      <div className="content">
        <Grid container direction = "column">
          <Grid item container>
            <Grid container item xs={0} sm={3} />
              <Grid xs = {12} sm = {6}>
                <Card>
                  <Grid container item
                    container
                    alignItems="center"
                    justify="center">
                    <Grid item xs={12} sm={8}>
                      <CardContent>
                        <TextField fullWidth value={this.state.value} onChange={this.changeTitle} id="filled-search" label="Enter a Question" type="search" variant="standard" />
                        {
                          this.state.abber.map((text, index) => {
                            return (
                              <div key={index} className="answers">
                                <TextField value={text} onChange={(e) => this.onChangeAnswers(e, index)} id="filled-search" label="answer" type="search" variant="standard" />
                              </div>
                            )
                          })
                        }
                      </CardContent>
                    </Grid>
                    <Grid container item xs={12} sm={8}>
                      <div className="btn">
                        <Grid item>
                          <CardActions>
                            <Button onClick={() => this.add()} size="small"> add answer </Button>
                          </CardActions>
                        </Grid>
                        <Grid item>
                          <CardActions>
                            <Button onClick={() => this.remove(0)} size="small"> remove answer </Button>
                          </CardActions>
                        </Grid>
                        <Grid item>
                          <CardActions>
                            <Button onClick={() => this.submit()} size="small"> Create Poll </Button>
                          </CardActions>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            <Grid item xs={0} sm={3} />
          </Grid>
        </Grid>

      </div>
    )
  };
}

export default Creation;


