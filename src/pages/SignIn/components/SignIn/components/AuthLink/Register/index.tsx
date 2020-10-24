import React from 'react'
import TextField from '@material-ui/core/TextField';

export const Register = () => {
    return (
        <>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Имя"
                type="name"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Почта"
                type="email"
                fullWidth
            />
            <TextField
                margin="dense"
                id="password"
                label="Пароль"
                type="password"
                fullWidth
            />
        </>
    )
}
