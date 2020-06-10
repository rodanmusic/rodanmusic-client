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
        <div style={{margin: '0 auto', width: '150px'}}>
          <RodanLogo onClick={() => handleNavigate('home')}/>
        </div>
        <div style={{margin: '0 auto', width: '383px'}}>
          <Toolbar style={{padding: '0px'}}>
              <Box variant='h6' className={classes.title}/>
              <Tabs 
                value={location} 
                onChange={(event, newValue) => handleNavigate(newValue)} 
                indicatorColor='secondary' 
                scrollButtons='off' 
                variant='standard'>
                {
                  navOptions.map(option => (
                    <Tab key={option} value={option.toLowerCase()} label={option} />
                  ))
                }
              </Tabs>
          </Toolbar> 
      </div>
    </div>       
  );
};