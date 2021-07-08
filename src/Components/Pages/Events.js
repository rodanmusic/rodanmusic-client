import React from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../Layout'
import limb from '../Pages/Events/limb.jpg';

const styles = {
    image: {
      width: '100%'
    }
};

export default (props) => {
    return (
        <>
            <ContentContainer title='c0ldstorage live'>
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
            <ContentContainer title='08-06-2021 - Limbleshwiften Presents'>
                <Typography paragraph variant='caption'>
                    A Night of House & Techno featuring c0ldstorage.
                </Typography>
                    <a href="https://www.facebook.com/events/350740229981955/?ref=newsfeed">
                        <img style={styles.image} src={limb} alt='Limbleshwiften Presents' />
                    </a>
            </ContentContainer>               
        </>
    );
}
    
