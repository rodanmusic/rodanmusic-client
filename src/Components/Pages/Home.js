import React from 'react';
import Bio from './Images/Bio.png';
import { Grid, Paper, useMediaQuery, Typography, Divider} from '@material-ui/core';

export default (props) => {

    const extraSmall = useMediaQuery('(max-width:400px)');
    const extraLarge = useMediaQuery('(min-width:1050px)');
    let contentPad = {padding: '0px 75px 0px 75px'};
    if(extraSmall){
        contentPad = {padding: '0px 10px 0px 10px'};
    } else if (extraLarge){
        contentPad = {padding: '0px 75px 0px 0px'};
    }
    let containerPad = extraSmall ? {paddingTop: '100px'}: {paddingTop: '100px'};

    return (
        <>
            <Grid container direction='row' wrap='wrap-reverse'>
                <Grid item xs={12} sm>  
                    <div align='center'>
                        <img style={{paddingTop: '75px'}} src={Bio} alt='Rodan' />
                    </div>
                </Grid>
                <Grid item xs={12} sm style={containerPad}>
                    <div horizontal-align='center' style={contentPad}>
                        <Paper square style={{padding: '40px 25px 25px 25px', minWidth: '300px'}}>
                            <Typography variant='h5' style={{paddingBottom: "5px"}}>
                                BIO
                            </Typography>
                            <Divider variant="full-width"/>
                            <Typography variant="body2">
                                <p>
                                    Growing up in a suburb of Salt Lake City, UT, Rodan was introduced to electronic music at a young age and was instantly consumed by the sounds heard.
                                    Initially intrigued by the groove of Trance, Rodan soon discovered a love for many different styles of electronic music. 
                                </p>
                                <p>
                                    At 15, Rodan downloaded a midi sequencer named Presto in an attempt to create music for the computer RPG he was developing with a friend.
                                    After playing with the software and struggling to create anything worthy of his video game project, he discovered Acid 3.0 and eventually Fruityloops 3.
                                </p>
                                <p>
                                    Slowly, writing music in Fruityloops became more exciting than programming or designing the RPG, and Rodan abandoned the project to spend all of his time writing music.
                                    These days Rodan alternates between Bitwig and Studio One.
                                </p>
                            </Typography>

                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
    