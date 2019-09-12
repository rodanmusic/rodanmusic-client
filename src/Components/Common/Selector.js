import React, { useState } from 'react';
import { NativeSelect, Input, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
    underline: {
        '&:after': {
            borderBottom: `2px solid #f50057`,
        },
        '&&&&:hover:before': {
            borderBottom: "2px solid #f50057"
        }
    }
})

export default (props) => {
    const [selectedItem, setSelectedItem] = useState(props.default);
    const classes = useStyles();

    const onSelect = (event) => {
        setSelectedItem(event.target.value);
        if(props.handleSelect){
            props.handleSelect(event.target.value);
        }
    };
    return (
            <FormControl>
                <NativeSelect className={classes.underline}  value={selectedItem} onChange={onSelect} input={<Input name="selectorInput" id="selectorInput" />}>
                    {
                        props.items && props.items.map((value, index) => {
                            return <option key={index} value={value}>{value}</option>
                        })
                    }
                </NativeSelect>
                <FormHelperText>{props.descriptor}</FormHelperText>
            </FormControl>
    );
}