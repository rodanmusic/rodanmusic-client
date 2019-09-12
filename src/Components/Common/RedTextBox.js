import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const StyledTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#f50057'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#f50057',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#f50057',
            }
        }
    }
})(TextField);

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '90%'
    },
    textArea: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    }
}));

const FieldType = {
    TEXT_FIELD: 'TEXT_FIELD',
    TEXT_AREA: 'TEXT_AREA'
}

const RedTextBox = (props) => {
    const classes = useStyles();

    let fieldClass = {};

    if(props.type === FieldType.TEXT_FIELD){
        fieldClass = classes.textField;
    } else if(props.type === FieldType.TEXT_AREA){
        fieldClass = classes.textArea;
    }

    return (
        <>
            <StyledTextField className={fieldClass} {...props} />
        </>
    );
}

export {FieldType, RedTextBox };