import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Grid, TextareaAutosize } from '@material-ui/core';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useStyles } from './../../../styles';
import { Button } from '@material-ui/core';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="static" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

export const NewTweet: React.FC = (): React.ReactElement => {

    const { paper } = useStyles();

    const [text, setText] = useState<string>('');
    const [cntTextSymbol, setCntTextSymbolt] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const target = e.currentTarget.value;

        if(target){
            setText(target);
            setCntTextSymbolt(text.length + 1);
            setProgress((cntTextSymbol / 280) * 100);
        }

    }

    return (
        <Paper className={paper} elevation={2}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1603745708381-afa35bb85db2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                </Grid>
                <Grid item xs={11}>
                    <TextareaAutosize
                        onChange={handleChangeTextarea}
                        value={text}
                        rowsMin={3}
                        placeholder="Что происходит"
                    />

                    <span>{ cntTextSymbol }</span> / <CircularProgressWithLabel value={ progress } />

                    <Button 
                        variant="outlined" 
                        color="primary"
                    >Твитнуть</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}