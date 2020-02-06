import React from 'react';
import TextField from '@material-ui/core/TextField';

// todo change font size to be 14px

export default class NextStepsInput extends React.Component {
    render() {
        const containerStyle = {
            paddingTop: '12px',
        }
        return (
            <TextField style={containerStyle} label="" id="standard-size-small"  placeholder="Next Steps" size="small" />
        );
    }
}