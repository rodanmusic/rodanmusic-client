import React from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../Layout'

export default (props) => {
    return (
        <>
            <ContentContainer title='LATEST TRACKS' >
                <Typography variant='body2'>
                    <p>
                        Mixes
                    </p>
                </Typography>
            </ContentContainer>
            <ContentContainer title='LATEST MIXES' >
                <Typography variant='body2'>
                    <p>
                        Latest Tracks
                    </p>
                </Typography>
            </ContentContainer>
        </>
    );
}
    