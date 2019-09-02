import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LogoLocation from './Images/RodanLogo.jpg';

const styles = {
    logo: {
      padding: '19px 20px 0px 0px',
      height: '25px'
    }
};

export default (props) => {

  const matches = useMediaQuery('(min-width: 400px)');
  let logoCrop = matches ? {} : {maxWidth: '30px', overflow: 'hidden'};

  return (
      <>
        <div style={logoCrop}>
          <a href='/'>
            <img style={styles.logo} alt='Rodan' src={LogoLocation} />
          </a>
        </div>
      </>
  );
};