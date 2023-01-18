import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const links = [
    {
        name: 'Галерея',
        to: '/gallery',
        active: 'gallery'
    },
    {
        name: 'Портреты',
        to: '/portraits',
        active: 'portraits'
    },
    {
        name: 'О художнике',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Контакты',
        to: '/contacts',
        active: 'contacts'
    },

]

export default function Header() {
    return (

        <Box component={'ul'} width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'}
            columnGap={'1.2em'}
            fontSize={'1rem'} paddingBottom={4}>
            {links.map((link, index) => (
                <Box key={index} component={'li'}>
                    <Link to={link.to}>
                        <p>{link.name}</p>
                    </Link>
                </Box>
            ))}
        </Box>
    );
};