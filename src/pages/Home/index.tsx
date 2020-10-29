import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './../styles';

import { Tweet, Sidebar, SideSearch, NewTweet, ActualTheme, WhoRead } from './components';


export const HomePage: React.FC = (): React.ReactElement => {
    const { paper } = useStyles();

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={1} lg={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={7}  lg={6}>
                    <Paper className={paper} elevation={2}>
                        <Typography variant="h6">Главная</Typography>
                    </Paper>
                    <br />
                    <NewTweet />
                    <br />
                    <Tweet 
                        text={ 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' } 
                        user={ { 
                            fullname: 'Zaligin', 
                            username: 'Sergey', 
                            avatar: "https://images.unsplash.com/photo-1603745708381-afa35bb85db2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" 
                        } } 
                    />
                    <br />
                </Grid>
                <Grid item xs={4}  lg={3}>
                    <SideSearch />
                    <br />
                    <ActualTheme />
                    <br />
                    <WhoRead />
                    <br />
                </Grid>
            </Grid>
        </Container>
        
    )
}
