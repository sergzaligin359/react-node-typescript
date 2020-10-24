import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export const Modal = ({children, title, open, handleClose}: any) => {
    
    const onClose = () => {
        handleClose();
    }
    return (
        <Dialog open={open} onClick={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{ title }</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="contained" color="primary" fullWidth>
                    Войти
                </Button>
            </DialogActions>
        </Dialog>
    )
}
