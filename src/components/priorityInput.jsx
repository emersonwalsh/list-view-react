import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

// todo change is only being refelcted in first instance... need to link to specific row 
// todo use different symbols other than stars

export default class PriorityInput extends React.Component {
    render() {
        const containerStyle = {
            paddingTop: '11px'
        }
        return (
            <Box display="flex" flexDirection="column" style={containerStyle}>
                <Rating name="size-small" defaultValue={this.props.priority} size="small" />
            </Box>
        );
    }
}