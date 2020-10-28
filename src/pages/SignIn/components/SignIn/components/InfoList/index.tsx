import React from 'react'
import { Typography } from '@material-ui/core';

import { useStyles } from '../../../../../styles';

export const InfoList = () => {
    const {leftBlock} = useStyles();
    return (
        <div className={leftBlock}>
            <ul>
                <li><Typography>Читайте о том что вам интересно.</Typography></li>
                <li><Typography>Узнайте о чем говорят в мире.</Typography></li>
                <li><Typography>Присоединяйтесь к общению.</Typography></li>
            </ul>
        </div>
    )
}
