import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

// todo on click of mail button trigger mail to

export default class CEO extends React.Component {
    render() {
        const linkStyle = {
            backgroundColor: 'white',
            color: 'black'
        };
    
        const iconStyle = {
            backgroundColor: 'white',
            // color: '#2684ff',
            padding: '8px'
        };

        const sendEmail = () => {
            window.location.href = "mailto:" + this.props.email;
        };


        return (
            <div>
                <IconButton 
                    style={iconStyle} 
                    onClick={sendEmail}
                    title="Send email">
                    <MailOutlineIcon />
                </IconButton>
                {this.props.name}
            </div>
        );
    }
}