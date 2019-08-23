import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { ContentContainer } from '../Layout'
import { navigate } from 'hookrouter';

export default (props) => {
    return (
        <Container>
            <ContentContainer title='PAGE NOT FOUND' >
                <Typography variant='body2'>
                    <p>
                       <a href='#' onClick={() => navigate('/')}>Return to Rodan Bio</a>
                    </p>
                </Typography>
            </ContentContainer>
        </Container> 
    );
}
    