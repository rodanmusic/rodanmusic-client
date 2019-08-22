import React from 'react';
import { Navigation, Footer, ContentContainer } from '.';
import { Home } from '../Pages';
import { Grid } from '@material-ui/core';
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
  },
  container: {
    paddingTop: '120px'
  },
  leftImage: {
    paddingTop: '75px'
  }
}

export default props => {
  return (
    <Grid container>
        <Grid item xs={12} style={styles.header}>
          <Navigation location={props.navigate} />
        </Grid>

        <Grid item xs={12}>
          <Grid container direction='row' wrap='wrap-reverse'>
            <Grid item xs={12} sm>  
                <div align='center'>
                    <img style={styles.leftImage} src={RodanPhoto} alt='Rodan' />
                </div>
            </Grid>
            <Grid item xs={12} sm style={styles.container}>
                <ContentContainer content={<Home />} title="BIO" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={styles.footer}><Footer /></Grid>
    </Grid>
  )
};
