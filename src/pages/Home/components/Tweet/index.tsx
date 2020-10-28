import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { useStyles } from '../../../styles';

interface TweetProps {
    text: string,
    user: {
        fullname: string,
        username: string,
        avatar: string,
    }
}

export const Tweet = ({text, user}: TweetProps): React.ReactElement => {

    const {paper} = useStyles();
    const { fullname, username, avatar } = user;

    return (
        <Paper className={paper} elevation={2}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Avatar 
                        alt="Remy Sharp" 
                        src={ avatar } 
                    />
                </Grid>
                <Grid item xs={11}>
                    <Typography><b>{fullname}</b> {username} · 21 мин</Typography>
                    <Typography variant="body1">
                        {text}
                    </Typography>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <div>
                            <IconButton aria-label="1">
                                <ChatBubbleOutlineIcon />
                            </IconButton>
                            <span>3</span>
                        </div>

                        <div>
                            <IconButton aria-label="1">
                                <RepeatIcon />
                            </IconButton>
                        </div>

                        <div>
                            <IconButton aria-label="1">
                                <FavoriteIcon />
                            </IconButton>
                        </div>

                        <div>
                            <IconButton aria-label="1">
                                <SaveAltIcon />
                            </IconButton>
                        </div>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Paper>
    );
}
