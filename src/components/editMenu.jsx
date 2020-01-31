import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
    'Edit',
    'Delete',
];

export default function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = e => {
        setAnchorEl(null);
    };

    const iconStyle = {
        // borderRadius: '0px',
        padding: '8px',
        backgroundColor: 'white'
    }

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={iconStyle}
                title="More"
                >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                    width: 130,
                    },
                }}>
                {options.map(option => (
                <MenuItem key={option} selected={option === ''} onClick={handleClose}>
                    {option}
                </MenuItem>
                ))}
            </Menu>
        </div>
    );
}