import React from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../Layout'

export default (props) => {
    return (
        <ContentContainer title='BLOG' >
            <Typography variant='body2'>
                <p>
                    Blog entries
                </p>
            </Typography>
        </ContentContainer>
    );
}
    