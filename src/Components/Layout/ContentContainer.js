import React from 'react';
import { Paper, useMediaQuery, Typography, Divider} from '@material-ui/core';

export default (props) => {

    const extraSmall = useMediaQuery('(max-width:400px)');
    const extraLarge = useMediaQuery('(min-width:1050px)');

    let contentPad = {padding: '0px 10px 10px 10px'};
    if(extraSmall){
        contentPad = {padding: '0px 5px 10px 5px'};
    } else if (extraLarge){
        contentPad = {padding: '0px 75px 10px 0px'};
    }

    let titlePad = props.title ? {padding: '40px 25px 25px 25px', minWidth: '300px'} : {padding: '0px 25px 25px 25px', minWidth: '300px'};
    let titleAlign = props.titleAlign ? props.titleAlign : 'left'

    return (
        <div style={contentPad}>
            <Paper square style={titlePad}>
                {props.title &&
                    <>
                        <Typography align={titleAlign} variant='h5' style={{paddingBottom: '5px'}}>
                            {props.title}
                        </Typography>
                        <Divider variant='fullWidth'/>
                    </>
                }
                <br />
                {props.children}
            </Paper>
        </div>
    );
}
    