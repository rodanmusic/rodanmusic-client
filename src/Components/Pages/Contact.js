import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Grid} from '@material-ui/core';
import { ContentContainer } from '../Layout'
import { RedButton } from "../Common/RedButton";
import { RedTextBox, FieldType } from "../Common/RedTextBox";

const axios = require('axios');
const CONTACT_ENDPOINT = '/contact/send';
const MessageState = {
    WAITING: 'WAITING',
    SENDING: 'SENDING',
    SUCCESS:'SUCCESS',
    FAILED: 'FAILED'
};

export default (props) => {
    const [messageInput, setMessageInput] = useState({name: '', email: '', message: ''});
    const [statusMessageSuccess, setStatusMessageSuccess] = useState(false);
    const [statusMessageError, setStatusMessageError] = useState('');
    const [fieldsDisabled, setFieldsDisabled] = useState(true);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [messageStatus, setMessageStatus] = useState(MessageState.WAITING);

    useEffect(() => {
        setFieldsDisabled(
            [MessageState.SENDING, MessageState.SUCCESS].includes(messageStatus)
        );
    }, [messageStatus]);

    useEffect(() => {
        resetStatusMessages();
        setSubmitDisabled(
            messageInput.name.length === 0 || 
            messageInput.email.length === 0 || 
            !messageInput.email.includes('@') || 
            messageInput.message.length === 0
        );
    }, [messageInput.name, messageInput.email, messageInput.message]);

    const sendMessage = useCallback(() => {
        setMessageStatus(MessageState.SENDING);
        resetStatusMessages();
        axios.post(CONTACT_ENDPOINT, {
            method: 'post',
            data: {
                name: messageInput.name,
                email: messageInput.email,
                message: messageInput.message
            },
            timeout: 10000
        }).then((response) => {
            console.log(response);
            setStatusMessageSuccess('Message Sent!');
            setSubmitDisabled(true);
            setMessageStatus(MessageState.SUCCESS);
        }, (error) => {
            console.log(error);
            setStatusMessageError('Unable to send your message.  Please try again later, or contact Rodan on his Facebook, or Soundcloud.');
            setMessageStatus(MessageState.FAILED);
        });
    }, [messageInput.name, messageInput.email, messageInput.message]);

    let resetStatusMessages = () => {
        setStatusMessageSuccess(undefined);
        setStatusMessageError(undefined);
    }

    let handleChange = name => event => {
        setMessageInput({...messageInput, [name]: event.target.value });
    }

    return (
        <>
            <ContentContainer title='CONTACT ME'>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography paragraph variant='caption'>Send me a message about bookings, music, or anything else music related.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg md xl>
                        <RedTextBox type={FieldType.TEXT_FIELD} disabled={fieldsDisabled} onChange={handleChange('name')} required id='name' label='Name' margin='normal'/>
                    </Grid>
                    <Grid item xs={12} sm={12} lg md xl>
                        <RedTextBox type={FieldType.TEXT_FIELD} disabled={fieldsDisabled} onChange={handleChange('email')} required id='email' label='Email' margin='normal'/>
                    </Grid>
                    <Grid item xs={12}>
                        <RedTextBox
                            disabled={fieldsDisabled} onChange={handleChange('message')} id='filled-multiline-static' 
                            type={FieldType.TEXT_AREA} label='Message' multiline rows='4' margin='normal'variant='outlined'
                        />
                    </Grid>
                    <Grid align='right' item xs={12}>
                        <RedButton disabled={submitDisabled || fieldsDisabled} onClick={sendMessage}>
                            Submit
                        </RedButton>
                    </Grid>
                </Grid>
            </ContentContainer>
            {
                ([MessageState.SUCCESS, MessageState.FAILED].includes(messageStatus)) &&
                    <ContentContainer>
                        <Grid align='center' item xs={12}>
                            {messageStatus === MessageState.FAILED && <Typography color={'error'} style={{paddingTop: '20px'}} variant='body1' paragraph>{statusMessageError}</Typography>}
                            {messageStatus === MessageState.SUCCESS && <Typography color={'inherit'} style={{paddingTop: '20px'}} variant='h6' paragraph>{statusMessageSuccess}</Typography>
}
                        </Grid>
                    </ContentContainer>
            }
        </>
    );
}
