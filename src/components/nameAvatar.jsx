import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export default class NameAvatar extends React.Component {
  render() {
    const avatarStyle = {
      backgroundColor: '#79bb79',
      color: 'white',
      height: '30px',
      width: '30px',
      fontSize: '14px',
    };

    const avatarContainer = {
      padding: '5px 0',
    };

    return (
      <div style={avatarContainer}>
        <Avatar style={avatarStyle}>{this.props.name.charAt(0)}</Avatar>
      </div>
    )

  }
}