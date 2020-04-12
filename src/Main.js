import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Poll from './components/Poll';
import Creation from './components/Creation'
import axios from 'axios'
import Search from './components/Search'
import Navbar from './components/Navbar'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import './App.css'

const styles = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      polls: []
    }
  }

  changeText = (e) => {
    this.setState({ text: e.target.value })
    console.log(this.state.text)
  }


  async componentDidMount() {
    await axios.get('http://localhost:5000/polls/')
      .then(res => {
        const polls = res.data
        let allPolls = []

        polls.forEach(poll => {
          const current = <Poll info={poll} />
          allPolls.push(current)
        })

        this.setState({ polls: allPolls })

      })
  }

  submit = async () => {
    let endpoint = 'http://localhost:5000/polls/'
    const id = this.state.text
    endpoint = endpoint.concat(id)
    console.log(id)
    console.log(endpoint)

    await axios.get(endpoint)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log("no such id")
        alert("Invalid ID please try again!")
      })
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
            <Grid item xs={0} sm={4} />
            <Grid item xs={12} sm={8}>
              <div className ="content">
                <img src="https://clip.cookdiary.net/sites/default/files/wallpaper/mango-clipart/234492/mango-clipart-transparent-background-234492-5775949.jpg" />
                <div className="textbox">
                  <Paper component="form" className={classes.root}>
                    <TextField value={this.state.value} onChange={this.changeText} fullWidth id="outlined-basic" label="Enter poll ID" variant="outlined" />
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton onClick={() => this.submit()} className={classes.iconButton} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </div>
              </div>
            </Grid>
            <Grid item xs={0} sm={4} />
          </Grid>
        </Grid>

      </div>
    );
  }
}

export default withStyles(styles)(Main);
