import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

// todo change is only being refelcted in first instance... need to link to specific row 

export default class PriorityInput extends React.Component {
    render() {
        const containerStyle = {
            paddingTop: '11px'
        }
        return (
            <Box display="flex" flexDirection="column" style={containerStyle}>
                <Rating
                    name="customized-empty"
                    defaultValue={this.props.priority}
                    max={3}
                    icon={<RadioButtonCheckedIcon fontSize="inherit" />}
                    emptyIcon={<RadioButtonUncheckedIcon fontSize="inherit" />}
                    size="small"
                />
            </Box>
        );
    }
}