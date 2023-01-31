import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container } from "@mui/material";

export default function Emailsended() {
    const { t } = useTranslation();
    return (
        <Container maxWidth="sm">
            <Box lineHeight={1.5} display={'flex'} flexDirection={'column'} alignItems={'normal'}
                sx={{ boxShadow: '0 0 20px black', textIndent: '0px', fontSize: '1rem', backgroundColor: '#645452', paddingLeft: 2, paddingRight: 2 }}>
                <Box py={2}>
                    <h3>{t('emailsended.part1')}</h3>
                </Box>
            </Box>
        </Container>
    )
}