import React from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../Layout'

export default (props) => {
    return (
        <>
            <ContentContainer title='BIO' >
                <Typography paragraph variant='body2'>
                        Growing up in South Weber, a suburb of Salt Lake City, UT, Rodan was introduced to electronic music at a young age and was immediately captivated by the sounds he discovered.
                        Initially intrigued by the sound of Trance, Rodan discovered a love for many different styles of electronic music.
                </Typography>
                <Typography paragraph variant='body2'>
                        At fifteen, Rodan downloaded a midi sequencer named Presto in an attempt to create music for the computer RPG he was developing with a friend. After playing with the software and 
                        struggling to create anything worthy of his video game project, he discovered Acid 3.0 and eventually Fruityloops 3 (And later Studio One and Bitwig).
                </Typography>
                <Typography paragraph variant='body2'>
                        Rodan has DJ'd shows throughout Utah, Idaho, and Nevada and ran a weekly club night at Salt Lake City’s downtown Hookah Lounge.  
                        Currently Rodan runs the c0ldstorage live stream on Twitch with his friends from the Lost Gospel DJ crew and still does everything he can to continue sharing the music he loves with others.
                </Typography>
            </ContentContainer>
            <ContentContainer title='EPK & Promotional Material'>
                <Typography paragraph variant='caption'>
                    <a href="https://drive.google.com/drive/folders/1-400Y9TM26BT_ql65quP2oaQI6ckVNAd?usp=sharing">Promotional Material</a>
                </Typography>
            </ContentContainer>       
            <ContentContainer title='Social Media'>
                <Typography paragraph variant='caption'>
                    <a href="https://drum.io/rodanmusic">Social Media Accounts</a>
                </Typography>
            </ContentContainer>                
        </>     
    );
}
    








