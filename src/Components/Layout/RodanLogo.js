import React from 'react';
import LogoLocation from './Images/RodanLogo.jpg';
import { Button } from '@material-ui/core';


const styles = {
    logo: {
      padding: '19px 0px 0px 0px',
      height: '25px'
    }
};

export default (props) => {
  return (
      <>
        <div>
          <Button onClick={props.onClick}>
            <img style={styles.logo} alt='Rodan' src={LogoLocation} />
          </Button>
        </div>
      </>
  );
};