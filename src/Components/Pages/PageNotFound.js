import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { ContentContainer } from '../Layout'
import { navigate } from 'hookrouter';
import { RedButton } from '../Common/RedButton';

export default (props) => {
    return (
        <Container>
            <ContentContainer title='PAGE NOT FOUND' >
                <Typography variant='body2'>
                    <p>
                       <RedButton onClick={() => navigate('/')}>Return to Rodan Bio</RedButton>
                    </p>
                </Typography>
            </ContentContainer>
        </Container> 
    );
}
    