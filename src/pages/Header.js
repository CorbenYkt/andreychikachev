import React from 'react';
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();

    return (

        <Box component={'ul'} display={'flex'} justifyContent={'center'}
            columnGap={'1em'}
            fontSize={'1rem'} paddingBottom={2}>
            <Link to={'/gallery'}>
                <p>{t('section.part1')}</p>
            </Link>
            <Link to={'/portraits'}>
                <p>{t('section.part2')}</p>
            </Link>
            <Link to={'/about'}>
                <p>{t('section.part3')}</p>
            </Link>
            <Link to={'/contacts'}>
                <p>{t('section.part4')}</p>
            </Link>
        </Box>

    );
};