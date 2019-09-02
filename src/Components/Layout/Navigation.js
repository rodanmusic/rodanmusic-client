import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tabs, Tab, Box } from '@material-ui/core';
import { navigate } from 'hookrouter';
import RodanLogo from './RodanLogo';

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
    }
}));

export default (props) => {
  const [value, setValue] = React.useState('home');
  const classes = useStyles();

  // to handle browser back/forward
  if(props.location && props.location !== value ){
    setValue(props.location);
  }

  function handleNavigate(event, newValue){
    setValue(newValue);
    navigate('/' + newValue);
  }

  return (
    <AppBar className={classes.toolbar} position='static'>
        <Toolbar>
            <RodanLogo />
            <Box variant='h6' className={classes.title}/>
            <Tabs value={value} onChange={handleNavigate} indicatorColor='secondary' scrollButtons='on' variant='scrollable'>
              <Tab value='home' label='Bio' />
              <Tab value='media' label='Media' />
              <Tab value='events' label='Events' />
              <Tab value='blog' label='Blog' />
              <Tab value='contact' label='Contact' />
            </Tabs>
        </Toolbar>
    </AppBar>
  );
};