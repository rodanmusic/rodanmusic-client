import React from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../Layout'
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default (props) => {
    const isSmallFormat = useMediaQuery('only screen and (max-device-width : 551px)'); // i
    return (
        <>
            <ContentContainer title='LATEST TRACKS' >
                <Typography paragraph variant='body2'>
                    {
                        <iframe title='Tracks' width="100%" height={!isSmallFormat ? '300' : '350'} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/545164371&color=%23f50057&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>                         
                    }
                </Typography>
            </ContentContainer>
            <ContentContainer title='LATEST MIXES' >
                <Typography paragraph variant='body2'>
                    {   
                        !isSmallFormat &&
                        <iframe title='Tracks' width="100%" height={!isSmallFormat ? '300' : '350'} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/545164992&color=%23f50057&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe> 
                    }                    
                </Typography>
            </ContentContainer>
        </>
    );
}
    