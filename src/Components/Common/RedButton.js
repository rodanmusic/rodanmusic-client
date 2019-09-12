import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

const StyledButton = withStyles({
    root: {
        '&:hover': {
            borderColor: '#f50057',
            backgroundColor: 'white',
            color: 'black'
        }
    }
})(Button);


let RedButton = (props) => {
    return (
        <>
            <StyledButton variant='outlined' {...props} />
        </>
    );
}

export { RedButton };