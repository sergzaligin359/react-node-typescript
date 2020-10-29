import React from 'react'
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Grid, TextareaAutosize } from '@material-ui/core';
import { Button } from '@material-ui/core';

export const WhoRead: React.FC = (): React.ReactElement => {
    return (
        <Paper>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1603745708381-afa35bb85db2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                </Grid>
                <Grid item xs={11}>
                    <Button variant="outlined" color="primary">Твитнуть</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
