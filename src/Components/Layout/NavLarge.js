import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Tabs, Tab, Box } from '@material-ui/core';
import RodanLogo from './RodanLogo';

const useStyles = makeStyles(theme => ({
  title: {
    paddingRight: '10px',
    flexGrow: 1
  }
}));

export default ({navOptions, handleNavigate, location}) => {
    const classes = useStyles();
    return (
      <div>   
        <Toolbar>
          <RodanLogo onClick={() => handleNavigate('home')}/>
          <Box variant='h6' className={classes.title}/>
          <Tabs 
            value={location} 
            onChange={(event, newValue) => handleNavigate(newValue)} 
            indicatorColor='secondary' 
            scrollButtons='on' 
            variant='scrollable'>
            {
              navOptions.map(option => (
                <Tab key={option} value={option.toLowerCase()} label={option} />
              ))
            }
          </Tabs>
        </Toolbar>
      </div>    
  );
};