import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import FormatAlignJustifyOutlinedIcon from '@material-ui/icons/FormatAlignJustifyOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { Typography } from '@material-ui/core';

export const Sidebar: React.FC = (): React.ReactElement => {

    return (
        <Paper>
            <List>
                <ListItem>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton>
                        <HomeOutlinedIcon />
                        <Hidden xsDown><Typography variant="h6">Главная</Typography></Hidden>
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
            <Button color="primary" fullWidth variant="contained">Твитнуть</Button>
        </Paper>
    );
}
