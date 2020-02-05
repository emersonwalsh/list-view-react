import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

export default class PriorityInput extends React.Component {
    render() {
        const containerStyle = {
            paddingTop: '11px'
        };

        const ratingStyle = {
            margin: '0 auto'
        };

        return (
            <Box display="flex" flexDirection="column" style={containerStyle}>
                <Rating
                    name="customized-empty"
                    defaultValue={this.props.priority}
                    name={this.props.id}
                    max={3}
                    style={ratingStyle}
                    icon={<RadioButtonCheckedIcon fontSize="inherit" />}
                    emptyIcon={<RadioButtonUncheckedIcon fontSize="inherit" />}
                    size="small"
                />
            </Box>
        );
    }
}