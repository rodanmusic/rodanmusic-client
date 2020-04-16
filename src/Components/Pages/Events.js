import React from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../Layout'

export default (props) => {
    return (
        <ContentContainer title='EVENTS' >
            <Typography paragraph variant='caption'>
                Rodan Streams live on the <a href='https://www.twitch.tv/c0ldstorage?tt_content=text_link&tt_medium=live_embed'>C0LDSTORAGE</a> with Soda Pop every Saturday @ 9PM MST.
            </Typography>
            <iframe 
                src='https://player.twitch.tv/?channel=c0ldstorage'
                style={{width: '100%', height: '300px'}}
                title='COLDSTORAGE Stream'
                frameborder='0'
                allowfullscreen='true' 
                scrolling='no'
                height='378' 
                width='620'>
            </iframe>                
        </ContentContainer>
    );
}
    