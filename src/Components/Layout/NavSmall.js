import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Drawer, Button, 
  List, ListItem, ListItemIcon, 
  ListItemText, Divider
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import RadioIcon from '@material-ui/icons/Radio';
import EventIcon from '@material-ui/icons/Event';
import BookIcon from '@material-ui/icons/Book';
import MessageIcon from '@material-ui/icons/Message';
import MenuIcon from '@material-ui/icons/Menu';
import RodanLogo from './RodanLogo';

const useStyles = makeStyles(theme => ({
    paper: {
      background: 'black',
      color: 'white'
    },
    links: {
      color: 'white',
    },
    dividerColor: {
      backgroundColor: 'white',
      width: '90%',
      margin: 'auto'
    }
}));

export default ({menuVisibility, toggleMenuVisibility, navOptions, handleNavigate}) => {
    const classes = useStyles();
    return (
        <>
          <div style={{margin: '0 auto'}}>
              <RodanLogo onClick={toggleMenuVisibility}/>
          </div>
          <div style={{margin: 'auto'}}>
            <Button onClick={toggleMenuVisibility} color='secondary'>
              <MenuIcon />
            </Button>
          </div>
          <div>
          <Drawer classes={{paper: classes.paper}} anchor='top' open={menuVisibility} onClose={toggleMenuVisibility}>
              <div style={{margin: 'auto'}}>
                <List aria-label="menu options">
                  {
                    navOptions.map(option => (
                      <ListItem value={option} key={option} button onClick={() => handleNavigate(option)}>
                        <ListItemIcon>{getIcon(option, classes)}</ListItemIcon>
                        <ListItemText className={classes.links} primary={option} />
                      </ListItem>
                    ))
                  }
                </List>
            </div>
            <Divider className={classes.dividerColor}/>
            <div style={{margin: '0 auto'}}>
                <Button onClick={toggleMenuVisibility} color='secondary'>
                  <List aria-label="menu close">
                      <ListItemIcon className={classes.links}>
                        <ListItemText className={classes.links} primary='Close' />
                      </ListItemIcon>
                  </List>
                </Button>              
            </div>
          </Drawer>
          </div>
        </>
    );
};

const getIcon = (option, classes) => {
    switch (option) {
      case 'Media': return <RadioIcon className={classes.links}/>;
      case 'Events': return <EventIcon className={classes.links}/>;
      case 'Blog': return <BookIcon className={classes.links}/>;
      case 'Contact': return <MessageIcon className={classes.links}/>;
      default: return <HomeIcon className={classes.links}/>;
    }
};