import React, {useState} from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


import { Modal } from '../../../../../../components/Modal'

import { useStyles } from '../../../../styles';
import { Sign } from './Sign';
import { Register } from './Register';

export const AuthLink = () => {

    const { rightBlock, rightSideTwitterIcon } = useStyles();

    const [ open, setOpen ] = useState(false);
    const [ mode, setMode ] = useState('');

    const handleClickOpen = (mode: any) => {
      setMode(mode);
      setOpen(true);
    };
  
    const handleClose = () => {
      setMode('');
      setOpen(false);
    };

    const title = mode === 'sign' ? 'Вход в твиттер' : 'Создайте учетную запись';

    return (
        <div className={ rightBlock }>
            <section>
                <TwitterIcon className={ rightSideTwitterIcon } />
                <Typography variant="h4">Узнай что происходит в мире прямо сейчас</Typography>
                <Typography>Присоединяйся к твиттеру прямо сейчас</Typography>
                <Button variant="contained" color="primary" onClick={ () => handleClickOpen('register') }>Зарегистрироваться</Button>
                <Button variant="outlined" color="primary" onClick={ () => handleClickOpen('sign') }>Войти</Button>
            </section>
            <Modal 
                open={ open } 
                handleClose={ handleClose }
                title={ title }
                aria-labelledby="form-dialog-title"
            >   
            { mode === 'sign' ? <Sign /> : <Register /> }
            </Modal>
        </div>

    )
}
