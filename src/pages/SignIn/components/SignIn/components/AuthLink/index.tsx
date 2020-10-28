import React, {useState} from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


import { ModalC } from '../../../../../../components/Modal'

import { useStyles } from '../../../../../styles';
import { Sign } from './Sign';
import { Register } from './Register';

export const AuthLink = () => {

    const { rightBlock, rightSideTwitterIcon } = useStyles();

    const [ open, setOpen ] = useState(false);
    const [ mode, setMode ] = useState('');

    const handleClickOpen = (mode: string) : void => {
      setMode(mode);
      setOpen(true);
    };
  
    const handleClose = () : void => {
      setMode('');
      setOpen(false);
    };

    const title: string = mode === 'sign' ? 'Вход в твиттер' : 'Создайте учетную запись';

    return (
        <div className={ rightBlock }>
            <section>
                <TwitterIcon className={ rightSideTwitterIcon } />
                <Typography variant="h4">Узнай что происходит в мире прямо сейчас</Typography>
                <Typography>Присоединяйся к твиттеру прямо сейчас</Typography>
                <Button variant="contained" color="primary" onClick={ () => handleClickOpen('register') }>Зарегистрироваться</Button>
                <Button variant="outlined" color="primary" onClick={ () => handleClickOpen('sign') }>Войти</Button>
            </section>
            <ModalC 
                open={ open } 
                handleClose={ handleClose }
                title={ title }
                aria-labelledby="form-dialog-title"
            >   
            { mode === 'sign' ? <Sign /> : <Register /> }
            </ModalC>
        </div>

    )
}
