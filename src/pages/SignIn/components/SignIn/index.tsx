import React from 'react'

import { AuthLink, InfoList } from './components';

import { useStyles } from '../../styles';

export const SignIn = () => {
    const {wrapper} = useStyles();
    return (
        <div className={wrapper}>
            <InfoList />
            <AuthLink />
        </div>
    )
}
