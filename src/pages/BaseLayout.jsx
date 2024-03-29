import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import logo from './img/logo.png';

import Header from './Header';
import Home from './Home';
import Gallery from './Gallery';
import Portraits from './Portraits';
import About from './About';
import Contacts from './Contacts';
import Emailsended from './Emailsended';
import Emailerror from './Emailerror';
import PageNotFound from './PageNotFound';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useTranslation } from "react-i18next";

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

export default function BaseLayout() {
    const { i18n } = useTranslation();
    const [isStatus, setStatus] = useState(false);

    const buttonHandler = () => {
        setStatus((status) => !status);

        if (isStatus) {
            i18n.changeLanguage('ru');
        } else {
            i18n.changeLanguage('en');
        }
    };

    return (
        <Grid container display={'flex'} flexDirection={'column'}
            justifyContent={'space-between'}>

            <Grid item>
                <Grid item p={2}
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center">
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography color={'#EFEFEF'} fontSize={'0.8rem'}>Рус</Typography>
                        <AntSwitch inputProps={{ 'aria-label': 'ant design' }} onChange={buttonHandler} />
                        <Typography color={'#EFEFEF'} fontSize={'0.8rem'}>Eng</Typography>
                    </Stack>
                </Grid>
            </Grid>

            <Grid item flexGrow={1} paddingLeft={2} paddingRight={4} xs={12}>
                <Container fixed>
                    <Box sx={{ textAlign: 'center', position: 'relative' }}>
                        <a href='../'>
                            <img src={logo} alt="Logo" width={'320px'} />
                        </a>
                    </Box>

                </Container >

                <Header></Header>

                <Routes>
                    <Route index path={'/'} element={<Home />} />
                    <Route exact path={'/gallery'} element={<Gallery />} />
                    <Route exact path={'/portraits'} element={<Portraits />} />
                    <Route exact path={'/about'} element={<About />} />
                    <Route exact path={'/contacts'} element={<Contacts />} />
                    <Route exact path={'/emailsended'} element={<Emailsended />} />
                    <Route exact path={'/emailerror'} element={<Emailerror />} />

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Grid>

            <Grid item>
                <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'3rem'} sx={{ opacity: 0.8, fontSize: '1rem' }} className={'author'}>
                    <a href={'https://github.com/corbenykt'} style={{ color: '#EEEEEE', fontWeight: 'normal', textDecorationLine: '' }} >
                        By Dmitrii Artemev
                    </a>
                    <p>&copy; 2023</p>
                </Box>
            </Grid>
        </Grid >
    )
}