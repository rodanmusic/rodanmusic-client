import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

export default (props) => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Bio</Button>
                <Button color="inherit">Events</Button>
                <Button color="inherit">Blog</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};