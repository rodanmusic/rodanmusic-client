import React, { useState, useEffect, useCallback } from 'react';
import { Typography, TextField, Grid, Button} from '@material-ui/core';
import { ContentContainer } from '../Layout'
import { makeStyles, withStyles } from '@material-ui/core/styles';
const axios = require('axios');

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
    },
    button: {
        '&:hover': {
            backgroundColor: '#f50057',
            color: '#FFF'
        }
    }
}));

const RedTextField = withStyles({
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

const RedButton = withStyles({
    root: {
        '&:hover': {
            borderColor: '#f50057',
            backgroundColor: 'white',
            color: 'black'
        }
    }
})(Button);

const CONTACT_ENDPOINT = 'localhost:4000/contact/send'

export default (props) => {
    const [messageState, setMessageState] = useState({name: '', email: '', message: ''});
    const [messageSuccess, setMessageSuccess] = useState('');
    const [messageError, setMessageError] = useState('');
    const classes = useStyles();
    const [submitDisabled, setSubmitDisabled] = useState(false);

    useEffect(() => {
        setSubmitDisabled(
            messageState.name.length === 0 || 
            messageState.email.length === 0 || 
            !messageState.email.includes('@') || 
            messageState.message.length === 0
        );
    }, messageState);

    const sendMessage = useCallback(() => {
        setMessageSuccess('');
        setMessageError('');
        axios.post(CONTACT_ENDPOINT, {
            method: 'post',
            url: CONTACT_ENDPOINT,
            data: {
                name: messageState.name,
                email: messageState.email,
                message: messageState.message
            },
            timeout: 10000
        }).then((response) => {
            console.log(response);
            setMessageSuccess('Message Sent');
        }, (error) => {
            console.log(error);
            setMessageError('Unable to send message.  Please try again later, or contact Rodan on his Facebook, or Soundcloud.');
        });
    }, messageState);

    let handleChange = name => event => {
        setMessageState({...messageState, [name]: event.target.value });
    }

    return (
        <>
            <ContentContainer title='CONTACT ME'>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography paragraph variant='caption'>Send me a message about bookings, music, or anything else music related.</Typography>
                    </Grid>
                    <Grid item xs={12} sm= {12 } lg md xl>
                        <RedTextField disabled={!messageSuccess} onChange={handleChange('name')} required id='name' label='Name' className={classes.textField} margin='normal'/>
                    </Grid>
                    <Grid item xs={12} sm={12} lg md xl>
                        <RedTextField disabled={!messageSuccess} onChange={handleChange('email')} required id='email' label='Email' className={classes.textField} margin='normal'/>
                    </Grid>
                    <Grid item xs={12}>
                        <RedTextField
                            disabled={!messageSuccess} onChange={handleChange('message')} id='filled-multiline-static' 
                            label='Message' multiline rows='4' className={classes.textArea} margin='normal'variant='outlined'
                        />
                    </Grid>
                    <Grid align='right' item xs={12}>
                        <RedButton disabled={submitDisabled && !messageSuccess} onClick={sendMessage()} variant='outlined'>
                            Submit
                        </RedButton>
                    </Grid>
                    <Grid align='right' item xs={12}>
                        messageError && <ContentContainer><Typography color={'error'} style={{paddingTop: '20px'}} variant='body2' paragraph>{messageError}</Typography></ContentContainer>
                        messageSuccess && <ContentContainer><Typography color={'primary'} style={{paddingTop: '20px'}} variant='body2' paragraph>{messageSuccess}</Typography></ContentContainer>
                    </Grid>
                </Grid>
            </ContentContainer>
        </>
    );
}
    