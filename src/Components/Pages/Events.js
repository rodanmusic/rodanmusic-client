import React from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../Layout'
import taurus from '../Pages/Events/taurus.jpg'
import artbeats from '../Pages/Events/artbeats.jpg'
import insanity from '../Pages/Events/Insanity.jpg'
import konnexion from '../Pages/Events/Konnexion.jpg'
import laytonbeatz from '../Pages/Events/LaytonBeatz.jpg'
import laytonbeatz2 from '../Pages/Events/LaytonBeatz2.jpg'
import audiobot from '../Pages/Events/Audiobot.jpg'
import blakliteseduction from '../Pages/Events/BlackLiteSeduction.jpg'
import blakliteGarage from '../Pages/Events/BlackLiteGarage.jpg'
import blaklite from '../Pages/Events/BlakLite.jpg'
import blaklitevalentines from '../Pages/Events/ValentinesDay.jpg'
import kandyland from '../Pages/Events/KandyLand.jpg'
import fire from '../Pages/Events/Fire.jpg'
import ice from '../Pages/Events/Ice.jpg'
import contra from '../Pages/Events/Contra.jpg'
import boulevardbassics from '../Pages/Events/BoulevardBassics.jpg'
import hookahlounge from '../Pages/Events/HookahLounge.jpg'

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
            <ContentContainer title='09-10-2021 - Insanity Fridays'>
                <Typography paragraph variant='caption'>
                    A two day camping event featuring a c0ldstorage takeover on Friday night.
                </Typography>
                <a href="https://www.facebook.com/events/536285940824617?ref=newsfeed">
                    <img style={styles.image} src={insanity} alt='Insanity Fridays' />
                </a>                                    
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
            <ContentContainer title='08-23-2013 - Konnexion Music Festival'>
                <Typography paragraph variant='caption'>
                    Electronic music festival in Idaho.
                </Typography>
                <img style={styles.image} src={konnexion} alt='Konnexion Festival' />
            </ContentContainer>              
            <ContentContainer title='07-23-2012 - Layton Beatz'>
                <img style={styles.image} src={laytonbeatz2} alt='Layton Beatz' />
            </ContentContainer>          
            <ContentContainer title='12-16-2011 - Audiobot'>
                <Typography paragraph variant='caption'>
                    Electronic music in Pocatello, ID.
                </Typography>
                <img style={styles.image} src={audiobot} alt='Audiobot' />
            </ContentContainer>                                                    
            <ContentContainer title='12-03-2011 - Black Lite Seduction'>
                <img style={styles.image} src={blakliteseduction} alt='Black Lite Seduction' />
            </ContentContainer>      
            <ContentContainer title='08-22-2011 - Layton Beatz'>
                <Typography paragraph variant='caption'>
                    Techno in the park!
                </Typography>
                <img style={styles.image} src={laytonbeatz} alt='Layton Beatz' />
            </ContentContainer>                        
            <ContentContainer title='02-14-2011 - St. Valentines Day Massacre'>
                <img style={styles.image} src={blaklitevalentines} alt='St. Valentines Day Massacre' />
            </ContentContainer>                                
            <ContentContainer title='12-31-2010 - Blak Lite Presents New Year'>
                <img style={styles.image} src={blaklite} alt='Blak Lite Presents New Year' />
            </ContentContainer>                                       
            <ContentContainer title='10-23-2010 - Blak Lite Garage'>
                <img style={styles.image} src={blakliteGarage} alt='Blak Lite Garage' />
            </ContentContainer>                                     
            <ContentContainer title='10-18-2008 - Fire'>
                <img style={styles.image} src={fire} alt='Fire' />
            </ContentContainer>      
            <ContentContainer title='10-18-2008 - Ice'>
                <img style={styles.image} src={ice} alt='Ice' />
            </ContentContainer>          
            <ContentContainer title='09-19-2008 - Kandy Land'>
                <img style={styles.image} src={kandyland} alt='Kandy Land' />
            </ContentContainer>                   
            <ContentContainer title='08-18-2008 - Contra'>
                <img style={styles.image} src={contra} alt='Contra' />
            </ContentContainer>                         
            <ContentContainer title='08-16-2008 - Boulevard Bassics'>
                <img style={styles.image} src={boulevardbassics} alt='Boulevard Bassics' />
            </ContentContainer>       
            <ContentContainer title='2007 - Puff Puff Pass Pass'>
                <Typography paragraph variant='caption'>
                    Weekly Ongoing Residency at the downtown Hookah Lounge in 2007.
                </Typography>
                <img style={styles.image} src={hookahlounge} alt='Puff Puff Pass Pass' />
            </ContentContainer>                                            
            
        </>
    );
}