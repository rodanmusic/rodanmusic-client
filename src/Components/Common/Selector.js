import React, { useState } from 'react';
import { NativeSelect, Input, InputLabel, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

export default (props) => {
    const [selectedItem, setSelectedItem] = useState(props.default);

    const onSelect = (event) => {
        setSelectedItem(event.target.value);
        if(props.handleSelect){
            props.handleSelect(event.target.value);
        }
    };

    const classes = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap'
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120
        }
      }));

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="selectorInput">Genre</InputLabel>
            <NativeSelect value={selectedItem} onChange={onSelect} input={<Input name="selectorInput" id="selectorInput" />}>
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