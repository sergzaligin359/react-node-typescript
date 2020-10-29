import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
}

export const ActualTheme: React.FC = (): React.ReactElement => {

    return (
        <Paper>
            <div>
                <Typography variant="h6">Актуальные темы</Typography>
                <List>
                    {generate(
                        <ListItem>
                            <ListItemText>
                                <Typography>Lorem ipsum dolore.</Typography>
                                <small>lets go</small>
                            </ListItemText>
                        </ListItem>,
                    )}
                </List>
            </div>
        </Paper>
    )
}
