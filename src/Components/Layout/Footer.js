import React from 'react';
import facebookLocation from './Images/Facebook.png';
import soundcloudLocation from './Images/Soundcloud.png';
import { useMediaQuery } from '@material-ui/core';

let styles = {
    facebook: { gridArea: 'facebook', justifySelf: 'right' },
    soundcloud: { gridArea: 'soundcloud', justifySelf: 'center' },
    tumblr: { gridArea: 'tumblr' , justifySelf: 'left' },
    soundcloudIcon: { width: '40px', height: '40px' },
    facebookIcon: { width: '32px', height: '32px' }
};

export default (props) => {

    let container = {
        display: 'grid',
        gridTemplateColumns: 'auto 150px auto',
        gridTemplateAreas: `
            'facebook soundcloud tumblr'
        `,
        alignItems: 'center',
        padding: '0px 75px 10px 75px'
    };

    const extraSmall = useMediaQuery('(max-width:400px)');
    const extraLarge = useMediaQuery('(min-width:1050px)');

    if(extraSmall){
        container.padding = '0px 10px 0px 10px';
    } else if(extraLarge) {
        container.padding = '0px 75px 10px 0px';
    }

    return (
        <div style={container}>
            <div style={styles.border}></div>
            <div style={styles.facebook}>
                <a href='http://www.facebook.com/rodanmusic' alt='Rodan Facebook'>
                    <img style={styles.facebookIcon} src={facebookLocation} alt='Rodan Facebook'/>
                </a>
            </div>
            <div style={styles.soundcloud}>
                <a href='http://www.soundcloud.com/rodanmusic' alt='Rodan Soundcloud'>
                    <img style={styles.soundcloud} src={soundcloudLocation} alt='Rodan Soundcloud'/>
                </a>
            </div>
            <div style={styles.tumblr}>
                <iframe className='btn' title='tumblr' frameBorder='0' border='0' scrolling='no' allowtransparency='true' height='20' width='95' src='https://platform.tumblr.com/v2/follow_button.html?type=follow-blog&amp;tumblelog=rodanmusic&amp;color=white'></iframe>
            </div>
        </div>
    );
}