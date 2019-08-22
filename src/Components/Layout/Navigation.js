import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tabs, Tab, Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LogoLocation from './Images/RodanLogo.jpg';

const useStyles = makeStyles(theme => ({
    tabLabel: {
      color: theme.palette.common.white
    },
    toolbar: {
      background: 'black'
    },
    root: {
      flexGrow: 1,
    },
    title: {
      paddingRight: '10px',
      flexGrow: 1,
    },
    logo: {
      padding: '19px 20px 0px 0px',
      height: '25px'
    }
}));

export default (props) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  function handleChange(event, newValue){
    setValue(newValue);
  }

  const matches = useMediaQuery('(min-width: 400px)');
  let logoCrop = matches ? {} : {maxWidth: '30px', overflow: 'hidden'};

  return (
    <AppBar className={classes.toolbar} position='static'>
        <Toolbar>
            <div style={logoCrop}>
            <a href='index.html'>
              <img className={classes.logo} alt='Rodan' src={LogoLocation} />
            </a>
            </div>
            <Box variant='h6' className={classes.title}/>
            <Tabs value={value} onChange={handleChange} indicatorColor='secondary' scrollButtons='on' variant='scrollable'>
              <Tab label='Bio' />
              <Tab label='Media' />
              <Tab label='Events' />
              <Tab label='Blog' />
              <Tab label='Contact' />
            </Tabs>
        </Toolbar>
    </AppBar>
  );
};