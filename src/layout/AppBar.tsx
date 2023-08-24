import * as React from 'react';
import { AppBar, Link, TitlePortal } from 'react-admin';
import Box from '@mui/material/Box';
import Logo from './Logo';

export const CustomAppBar = () => (
    <AppBar color='secondary'>
        <Link to="/home">
            <Logo />
        </Link>
        <Box flex="1" />
    </AppBar>
);