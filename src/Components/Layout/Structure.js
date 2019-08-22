import React from 'react';
import { Navigation, Footer } from '.';
import { Home } from '../Pages';
import { Grid } from '@material-ui/core';

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
  return (
    <Grid container>
        <Grid item xs={12} style={styles.header}>
          <Navigation location={props.navigate} />
        </Grid>
        <Grid item xs={12}><Home /></Grid>
        <Grid item xs={12} style={styles.footer}><Footer /></Grid>
    </Grid>
  )
};
