import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export default class NameAvatar extends React.Component {
  render() {
    const avatarStyle = {
      backgroundColor: '#79bb79',
      color: 'white',
      height: '22px',
      width: '22px',
      fontSize: '14px',
      margin: '0 auto',
    };

    const avatarContainer = {
      padding: '9px 0',
    };

    return (
      <div style={avatarContainer} title={this.props.name}>
        <Avatar style={avatarStyle}>{this.props.name.charAt(0)}</Avatar>
      </div>
    );
  }
}