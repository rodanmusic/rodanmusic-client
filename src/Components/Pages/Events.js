import React from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../Layout'

export default (props) => {
    return (
        <ContentContainer title='EVENTS' >
            <Typography paragraph variant='body2'>
                No Events Currently
            </Typography>
        </ContentContainer>
    );
}
    