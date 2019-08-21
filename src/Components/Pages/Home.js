import React from 'react';
import Bio from './Images/Bio.png';
import { Grid, Paper, useMediaQuery } from '@material-ui/core';

// TODO: Move to a store
const aboutMe = `
Growing up in a suburb of Salt Lake City, UT, Rodan was introduced to electronic music at a young age and was instantly consumed by the sounds heard.
Initially intrigued by the groove of Trance, Rodan soon discovered a love for many different styles of electronic music.
At 15, Rodan downloaded a midi sequencer named Presto in an attempt to create music for the computer RPG he was developing with a friend.
After playing with the software and struggling to create anything worthy of his video game project, he discovered Acid 3.0 and eventually Fruityloops 3.
Slowly, writing music in Fruityloops became more exciting than programming or designing the RPG, and Rodan abandoned the project to spend all of his time writing music.
These days Rodan alternates between Bitwig and Studio One.
`;

export default (props) => {
    const viewMinWidth = useMediaQuery("(max-width:500px)");
    
    let contentCSS = {minWidth: "450px"};
    if(viewMinWidth){
        contentCSS.paddingTop = "100px";
    } else {
        contentCSS.paddingTop = "250px";
    };

    return (
        <>
            <Grid container direction="row" spacing={5} wrap="wrap-reverse">
                <Grid item xs={12} sm>  
                    <div align="center">
                        <img style={{paddingTop: "75px"}} src={Bio} alt="Rodan" />
                    </div>
                </Grid>
                <Grid item xs={12} sm style={contentCSS}>
                    <Paper>
                        {aboutMe}
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}
    