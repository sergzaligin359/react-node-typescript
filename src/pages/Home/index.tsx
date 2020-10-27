import React from 'react';
import { Container, Grid } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import FormatAlignJustifyOutlinedIcon from '@material-ui/icons/FormatAlignJustifyOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';

export const HomePage: React.FC = (): React.ReactElement => {
    return (
        <Container maxWidth="lg">
            <Grid container >
                <Grid item xs={1}>
                    <List>
                        <ListItem>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <HomeOutlinedIcon />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <GridOnOutlinedIcon />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <NotificationsOutlinedIcon />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <MailOutlineOutlinedIcon />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <LabelOutlinedIcon />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <NotificationsOutlinedIcon />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <FormatAlignJustifyOutlinedIcon />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <PermIdentityOutlinedIcon />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <GroupWorkOutlinedIcon />
                            </IconButton>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={7}>2</Grid>
                <Grid item xs={4}>
                <TextField
                    
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                />
                </Grid>
            </Grid>
        </Container>
        
    )
}
