import React from "react";
import facebookLocation from './Images/Facebook.png';

const styles = {
    container: {
        display: "grid",
        gridTemplateColumns: "auto 150px auto",
        gridTemplateAreas: `
            "facebook soundcloud tumblr"
        `,
        // justifyItems: "center",
        alignItems: "center"
    },
    facebook: { gridArea: "facebook", justifySelf: "right"},
    soundcloud: { gridArea: "soundcloud", justifySelf: "center" },
    tumblr: { gridArea: "tumblr" , justifySelf: "left"},
    soundcloudIcon: { width: "40px", height: "40px" }, 
    facebookIcon: { width: "32px", height: "32px" }
};

export default (props) => {
    return (
        <div style={styles.container}>
            <div style={styles.border}></div>
            <div style={styles.facebook}>
                <a href="http://www.facebook.com/rodanmusic" alt="Rodan Facebook">
                    <img style={styles.facebookIcon} src={facebookLocation} alt="Rodan Facebook"/>
                </a>
            </div>
            <div style={styles.soundcloud}>
                <iframe title="soundcloud" allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Frodanmusic&color=white_transparent&size=40" style={styles.soundcloudIcon}></iframe>
            </div>
            <div style={styles.tumblr}>
                <iframe class="btn" title="tumblr" frameborder="0" border="0" scrolling="no" allowtransparency="true" height="20" width="95" src="https://platform.tumblr.com/v2/follow_button.html?type=follow-blog&amp;tumblelog=rodanmusic&amp;color=white"></iframe>
            </div>
        </div>
    );
}