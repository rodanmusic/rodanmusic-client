import React, { useState } from 'react';
import { Typography, TextField, Grid, Button} from '@material-ui/core';
import { ContentContainer } from '../Layout'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '90%',
    },
    textArea: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    }
  }));

export default (props) => {
    const [state, setState] = useState({name: '', email: '', message: ''});
    const classes = useStyles();
    return (
        <>
            <ContentContainer title='CONTACT ME'>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography paragraph variant='caption'>Send me a message about booking, music, or anything else music related.</Typography>
                    </Grid>
                    <Grid item xs={12} sm= {12 } lg md xl>
                        <TextField required id='name' label='Name' className={classes.textField} margin='normal'/>
                    </Grid>
                    <Grid item xs={12} sm= {12 } lg md xl>
                        <TextField required id='email' label='Email' className={classes.textField} margin='normal'/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='filled-multiline-static'
                            label='Message'
                            multiline
                            rows='4'
                            className={classes.textArea}
                            margin='normal'
                            variant='outlined'
                        />
                    </Grid>
                    <Grid align='right' direction='row' justify='flex-end' item xs={12}>
                        <Button variant='outlined' className={classes.button}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </ContentContainer>
        </>
    );
}
    