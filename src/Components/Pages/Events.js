import React from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../Layout'
import limb from '../Pages/Events/limb.jpg';
import taurus from '../Pages/Events/taurus.jpg'
import artbeats from '../Pages/Events/artbeats.jpg'

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
                    Rodan Streams live on the <a href='https://www.twitch.tv/c0ldstorage?tt_content=text_link&tt_medium=live_embed'>c0ldstorage</a> every Saturday @ 9PM Mountain Time.
                </Typography>
                <iframe 
                    src='https://player.twitch.tv/?channel=c0ldstorage&parent=www.rodanmusic.com&parent=rodanmusic.com'
                    style={{width: '100%', height: '300px'}}
                    title='c0ldstorage Stream'
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
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/LKH46pD13wQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </a>
            </ContentContainer>            
            <ContentContainer title='07-21-2021 - Art Beats'>
                <Typography paragraph variant='caption'>
                    Playing Deep House, Funky House, Tech House, and some techno at an upscale wine and art bar.
                </Typography>
                <img style={styles.image} src={artbeats} alt='Art Beats' />
            </ContentContainer>                
            <ContentContainer title='04-23-2021 - Taurus Campout'>
                <Typography paragraph variant='caption'>
                    Techno in the Nevada desert mountains.
                </Typography>
                <img style={styles.image} src={taurus} alt='Taurus Campout' />
            </ContentContainer>          
        </>
    );
}