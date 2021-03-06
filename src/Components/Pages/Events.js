import React from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../Layout'
import Paradigm from './Events/paradigm.jpg';

export default (props) => {
    const imageSize = {width: '95%', height: '95%'};
    return (
        <>
            <ContentContainer title='LIVE STREAM'>
                <Typography paragraph variant='caption'>
                    Rodan Streams live on the <a href='https://www.twitch.tv/c0ldstorage?tt_content=text_link&tt_medium=live_embed'>c0ldstorage</a> with Soda Pop every Saturday @ 9PM MST.
                </Typography>
                <iframe 
                    src='https://player.twitch.tv/?channel=c0ldstorage&parent=www.rodanmusic.com&parent=rodanmusic.com'
                    style={{width: '100%', height: '300px'}}
                    title='COLDSTORAGE Stream'
                    frameBorder='0'
                    allowFullScreen={true}
                    scrolling='no'
                    height='378' 
                    width='620'>
                </iframe>                
            </ContentContainer>        
        </>
    );
}
    
