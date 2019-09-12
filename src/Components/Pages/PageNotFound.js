import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { ContentContainer } from '../Layout'
import { navigate } from 'hookrouter';
import { RedButton } from '../Common/RedButton';

export default (props) => {
    return (
        <Container>
            <ContentContainer titleAlign='center' align='center' title='PAGE NOT FOUND' >
                <Typography align='center' variant='body2'>
                    <RedButton onClick={() => navigate('/')}>Return to Rodan Bio</RedButton>
                </Typography>
            </ContentContainer>
        </Container> 
    );
}
    