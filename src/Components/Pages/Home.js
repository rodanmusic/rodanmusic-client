import React from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../Layout'

export default (props) => {
    return (
        <ContentContainer title='BIO' >
            <Typography paragraph variant='body2'>
                    Growing up in a suburb of Salt Lake City, UT, Rodan was introduced to electronic music at a young age and was instantly consumed by the sounds heard.
                    Initially intrigued by the groove of Trance, Rodan soon discovered a love for many different styles of electronic music. 
            </Typography>
            <Typography paragraph variant='body2'>
                    At 15, Rodan downloaded a midi sequencer named Presto in an attempt to create music for the computer RPG he was developing with a friend.
                    After playing with the software and struggling to create anything worthy of his video game project, he discovered Acid 3.0 and eventually Fruityloops 3.
            </Typography>
            <Typography paragraph variant='body2'>
                    Slowly, writing music in Fruityloops became more exciting than programming or designing the RPG, and Rodan abandoned the project to spend all of his time writing music.
                    These days Rodan alternates between Bitwig and Studio One.
            </Typography>
        </ContentContainer>
    );
}
    