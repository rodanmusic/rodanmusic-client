import React from 'react';
import { Navigation, Footer } from '.';
import { Grid, useMediaQuery} from '@material-ui/core';
import RodanPhoto from './Images/RodanStutter.gif';

const styles = {
  header: {
    position: 'fixed',
    top: '0px',
    width: '100%'
  },
  footer: {
    width: '100%'
  }
}

export default props => {

  const isSmallFormat = useMediaQuery('only screen and (max-device-width : 551px)'); // image size is 552

  let imageAdjustment = {paddingTop: '75px'};
  let container = {paddingTop: '120px'}
  if(isSmallFormat){
    imageAdjustment = {width: '95%', height: '95%', paddingTop: '62px'};
    container = {paddingTop: '80px', paddingBottom: '0px'}
  }

  return (
    <Grid container>
        <Grid item xs={12} style={styles.header}>
          <Navigation location={props.location.navValue} />
        </Grid>
        <Grid item xs={12} style={{marginBottom: '30px'}}>
          <Grid container direction='row' wrap='wrap-reverse'>
            <Grid item xs={12} sm>  
                <div align='center'>
                    <img style={imageAdjustment} src={RodanPhoto} alt='Rodan' />
                </div>
            </Grid>
            <Grid item xs={12} sm style={container}>
                {props.location.component}
                <Footer />
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  )
};
