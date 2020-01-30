import React from 'react';
import TextField from '@material-ui/core/TextField';

// todo change is only being refelcted in first instance... need to link to specific row 
// todo use different symbols other than stars

export default class NextStepsInput extends React.Component {
    render() {
        const containerStyle = {
            paddingTop: '11px'
        }
        return (
            <TextField
                id="standard-textarea"
                label="Next Steps"
                placeholder="Placeholder"
                variant="outlined"
                // multiline
            />
        );
    }
}