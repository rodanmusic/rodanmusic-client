import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Grid} from '@material-ui/core';
import { ContentContainer } from '../Layout'
import { RedButton } from "../Common/RedButton";
import { RedTextBox, FieldType } from "../Common/RedTextBox";

const axios = require('axios');
const CONTACT_ENDPOINT = 'http://localhost:4000/contact/send'

export default (props) => {
    const [messageState, setMessageState] = useState({name: '', email: '', message: ''});
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [messageError, setMessageError] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [sending, setSending] = useState(false);

    let watchValues = [messageState.name, messageState.email, messageState.message];

    useEffect(() => {
        resetMessages();
        setSubmitDisabled(
            messageState.name.length === 0 || 
            messageState.email.length === 0 || 
            !messageState.email.includes('@') || 
            messageState.message.length === 0
        );
    }, watchValues);

    const sendMessage = useCallback(() => {
        setSending(true);
        resetMessages();
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
            setMessageSuccess('Message Sent!');
            setSubmitDisabled(true);
            setSending(false);
        }, (error) => {
            console.log(error);
            setMessageError('Unable to send your message.  Please try again later, or contact Rodan on his Facebook, or Soundcloud.');
            setSending(false);
        });
    }, watchValues);

    let resetMessages = () => {
        setMessageSuccess(undefined);
        setMessageError(undefined);
    }

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
                    <Grid item xs={12} sm= {12} lg md xl>
                        <RedTextBox type={FieldType.TEXT_FIELD} disabled={messageSuccess || sending} onChange={handleChange('name')} required id='name' label='Name' margin='normal'/>
                    </Grid>
                    <Grid item xs={12} sm={12} lg md xl>
                        <RedTextBox type={FieldType.TEXT_FIELD} disabled={messageSuccess || sending} onChange={handleChange('email')} required id='email' label='Email' margin='normal'/>
                    </Grid>
                    <Grid item xs={12}>
                        <RedTextBox
                            disabled={messageSuccess || sending} onChange={handleChange('message')} id='filled-multiline-static' 
                            type={FieldType.TEXT_AREA} label='Message' multiline rows='4' margin='normal'variant='outlined'
                        />
                    </Grid>
                    <Grid align='right' item xs={12}>
                        <RedButton disabled={submitDisabled  || sending} onClick={sendMessage}>
                            Submit
                        </RedButton>
                    </Grid>
                </Grid>
            </ContentContainer>
            {
                (messageError || messageSuccess) &&
                    <ContentContainer>
                        <Grid align='center' item xs={12}>
                            {
                                messageError && <Typography color={'error'} style={{paddingTop: '20px'}} variant='body1' paragraph>{messageError}</Typography>
                            }
                            {
                                messageSuccess && <Typography color={'inherit'} style={{paddingTop: '20px'}} variant='h6' paragraph>{messageSuccess}</Typography>
                            }
                        </Grid>
                    </ContentContainer>
            }
        </>
    );
}
    