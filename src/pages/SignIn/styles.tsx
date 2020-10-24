import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    leftBlock: {
        backgroundColor: '#1DA1F2',
        flex: '0 0 50%',
        alignItems: 'center',
        display: 'flex',
    },
    rightBlock: {
        backgroundColor: '#fff',
        flex: '0 0 50%',
        alignItems: 'center',
        display: 'flex',
    },
    rightSideTwitterIcon: {
        fontSize: '50px',
        color: '#1DA1F2'
    }
  }));