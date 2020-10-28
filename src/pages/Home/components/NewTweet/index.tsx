import React from 'react'
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Grid, TextareaAutosize } from '@material-ui/core';

import { useStyles } from './../../../styles';

export const NewTweet: React.FC = (): React.ReactElement => {
    const { paper } = useStyles();
    
    return (
        <Paper className={paper} elevation={2}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1603745708381-afa35bb85db2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                </Grid>
                <Grid item xs={11}>
                    <TextareaAutosize aria-label="Что происходит" rowsMin={3} placeholder="Minimum 3 rows" />
                </Grid>
            </Grid>
        </Paper>
    )
}