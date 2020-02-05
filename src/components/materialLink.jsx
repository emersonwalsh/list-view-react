import React from 'react';

export default class NameAvatar extends React.Component {
    render() {
        const containerStyler = {
            textAlign: 'center'
        };

        const linkStyle = {
            backgroundColor: 'white',
            color: '#2684ff'
        };

        return (
            <div style={containerStyler}>
                <a style={linkStyle} href={this.props.link} target="_blank">Material</a>
            </div>
        );
    }
}