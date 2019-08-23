import React from 'react';
import { Navigation, Footer } from '.';
import { Grid, useMediaQuery} from '@material-ui/core';
import RodanPhoto from './Images/RodanPhoto.png';

const styles = {
  header: {
    position: 'fixed',
    top: '0px',
    width: '100%'
  },
  footer: {
    position: 'fixed',
    bottom: '0px',
    width: '100%'
  }
}

export default props => {

  const isMobile = useMediaQuery('only screen and (max-device-width : 551px)'); // image size is 552
  
  let imageAdjustment = {paddingTop: '75px'};
  let container = {paddingTop: '120px'}
  if(isMobile){
    imageAdjustment = {width: '95%', height: '95%', paddingTop: '70px'};
    container = {paddingTop: '80px', paddingBottom: '80px'}
  }

  return (
    <Grid container>
        <Grid item xs={12} style={styles.header}>
          <Navigation location={props.location.navValue} />
        </Grid>

        <Grid item xs={12}>
          <Grid container direction='row' wrap='wrap-reverse'>
            <Grid item xs={12} sm>  
                <div align='center'>
                    <img style={imageAdjustment} src={RodanPhoto} alt='Rodan' />
                </div>
            </Grid>
            <Grid item xs={12} sm style={container}>
                {props.location.component}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={styles.footer}><Footer /></Grid>
    </Grid>
  )
};
