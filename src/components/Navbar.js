import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        marginRight: theme.spacing(2.5),
    },
    browse: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const navStyles = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" style={navStyles}>
                            Mango Polls
                        </Link>
                    </Typography>

                    <Typography variant="h8" className={classes.browse}>
                        <Link to="/Browse" style={navStyles}>
                            Browse
                        </Link>
                    </Typography>
                    <Typography>
                        <Link to="/Creation" style={navStyles}>
                            Make a poll
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}