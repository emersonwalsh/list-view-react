import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControlHalf: {
        margin: theme.spacing(1),
        width: 'calc(50% - 16px)',
    },
    formControlFull: {
        margin: theme.spacing(1),
        width: 'calc(100% - 16px)',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


// todo make deal modal its own component (dealModal.jsx)
// todo open the modal on Edit (pass in row info as props)


export default function NewDealButton() {
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = event => {
        setAge(event.target.value);
    };

  
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
                    <FormControl className={classes.formControlFull}>
                        <TextField
                            autoFocus
                            id="company"
                            label="Company"
                            type="text"
                        />
                    </FormControl>
                    <FormControl className={classes.formControlHalf}>
                        <TextField
                            id="ceo-name"
                            label="CEO name"
                            type="text"
                        />
                    </FormControl>
                    <FormControl className={classes.formControlHalf}>
                        <TextField
                            id="ceo-email"
                            label="CEO email"
                            type="email"
                        />
                    </FormControl>
                    <FormControl className={classes.formControlHalf}>
                        <TextField
                            id="material-link"
                            label="One Drive Link"
                            type="url"
                        />
                    </FormControl>
                    <FormControl className={classes.formControlHalf}>
                        <InputLabel>Deal POC</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}>
                            <MenuItem value={1}>Spencer</MenuItem>
                            <MenuItem value={2}>John</MenuItem>
                        </Select>
                    </FormControl>
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