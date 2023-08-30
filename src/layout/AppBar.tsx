import * as React from 'react';
import { AppBar, Link, TitlePortal, ToggleThemeButton } from 'react-admin';
import Box from '@mui/material/Box';
import Logo from './Logo';

export const CustomAppBar = () => (
    <AppBar color='secondary' toolbar={
        <>
        <ToggleThemeButton/>
        </>
    }>
        <Link to="/home">
            <Logo />
        </Link>
        <Box flex="1" />
    </AppBar>
);