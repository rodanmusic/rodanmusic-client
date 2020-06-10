import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { navigate } from 'hookrouter';
import { useMediaQuery } from '@material-ui/core';
import NavSmall from './NavSmall';
import NavMedium from './NavMedium';
import NavLarge from './NavLarge';

const useStyles = makeStyles(theme => ({
    toolbar: {
        background: 'black'
    },
    tabLabel: {
      color: theme.palette.common.white
    },
    root: {
      flexGrow: 1,
    },
    title: {
      paddingRight: '10px',
      flexGrow: 1,
    }
}));

const navOptions = ['Home', 'Media', 'Events', 'Blog', 'Contact'];

export default (props) => {
  const [value, setValue] = React.useState('home');
  const classes = useStyles();
  const [menuVisibility, setMenuVisibility] = React.useState(false);

  // to handle browser back/forward
  if(props.location && props.location !== value ){
    setValue(props.location);
  }

  const toggleMenuVisibility = () => {
    setMenuVisibility(!menuVisibility);
  }

  const handleNavigate = (location) => {
    setMenuVisibility(false);
    setValue(location.toLowerCase());
    navigate('/' + location.toLowerCase());
  }

  const extraSmall = useMediaQuery('(max-width:400px)');
  const extraLarge = useMediaQuery('(min-width:800px)');
  const toolbarStyle = {
      paddingRight: '10px'
  };

  if(extraSmall){
      toolbarStyle.paddingRight = '0px';
  } else if(extraLarge) {
      toolbarStyle.paddingRight = '30px';
  }

  return (
    <AppBar style={toolbarStyle} className={classes.toolbar} position='static'>
      {
        extraSmall && <NavSmall menuVisibility={menuVisibility} toggleMenuVisibility={toggleMenuVisibility} navOptions={navOptions} handleNavigate={handleNavigate} />
      }
      { 
        !extraLarge && ! extraSmall && <NavMedium navOptions={navOptions} handleNavigate={handleNavigate} location={value} />
      }
      { 
        extraLarge && <NavLarge navOptions={navOptions} handleNavigate={handleNavigate} location={value}/>
      }
    </AppBar>
  );
};