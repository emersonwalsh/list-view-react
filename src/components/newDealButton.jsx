import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function NewDealButton() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleCancel = () => {
        setOpen(false);
    };

    const handleAdd = () => {
        setOpen(false);
        // TODO add to state
    };

    const buttonStyle = {
        float: 'right',
        right: '8px',
        top: '7px',
        backgroundColor: '#2684ff'
    };

    const blueBackgroundStyle = {
        backgroundColor: '#2684ff'
    };

    const blueFontStyle = {
        color: '#2684ff'
    };
  
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                style={buttonStyle}
                onClick={handleClickOpen}
                startIcon={<AddIcon />}
            >
                Add Deal
            </Button>
            <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a New Deal</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter company information below.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="company"
                        label="Company"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="normal"
                        id="ceo-name"
                        label="CEO name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="normal"
                        id="ceo-email"
                        label="CEO email"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        margin="normal"
                        id="material-link"
                        label="One Drive Link"
                        type="url"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary" style={blueFontStyle}>
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} variant="contained" color="primary" style={blueBackgroundStyle}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}