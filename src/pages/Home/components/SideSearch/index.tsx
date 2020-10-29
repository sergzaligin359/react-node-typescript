import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './../../../styles';

export const SideSearch: React.FC = (): React.ReactElement => {
    const { paper } = useStyles();
    
    return (
        <Paper className={paper}>
            <TextField
                label="Поиск по твиттеру"
                variant="outlined"
                id="mui-theme-provider-outlined-input"
            />
        </Paper>
    )
}
