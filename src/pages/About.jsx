import React from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import Avatar from './img/photo.jpg';

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
      <Box lineHeight={1.5} display={'flex'} flexDirection={'column'} alignItems={'normal'}
        sx={{ boxShadow: '0 0 20px black', textIndent: '15px', textAlign: 'justify', fontSize: '1rem', backgroundColor: '#645452', paddingLeft: 2, paddingRight: 2 }}>
        <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
          justifyContent={'center'}>
          <Box py={2}>

            <img src={Avatar} alt="Logo" width={'300px'} style={{ 'float': 'left', 'margin': '5px 15px 0 0' }} />
            <h1>{t('about.bio')}</h1>
            {t('about.part1')}
            <p>{t('about.part2')}</p>
            <p>{t('about.part3')}</p>
            <p>{t('about.part4')}</p>
            <p>{t('about.part5')}</p>
            <p>{t('about.part6')}</p>
            <p>{t('about.part7')}</p>
            <p>{t('about.part8')}</p>
            <p>{t('about.part9')}</p>
            <p>{t('about.part10')}</p>
            <p>{t('about.part11')}</p>
            <p>{t('about.part12')}</p>
            <p>{t('about.part13')}</p>
            <p>{t('about.part14')}</p>
            <p>{t('about.part15')}</p>
            <p>{t('about.part16')}</p>
            <p>{t('about.part17')}</p>
            <p>{t('about.part18')}</p>
            <p>{t('about.part19')}</p>
            <p>{t('about.part20')}</p>
            <p>{t('about.part21')}</p>
            <p>{t('about.part22')}</p>
            <p>{t('about.part23')}</p>
            <p>{t('about.part24')}</p>
            <p>{t('about.part25')}</p>
            <p>{t('about.part26')}</p>
            <p>{t('about.part27')}</p>
            <p>{t('about.part28')}</p>
            <p>{t('about.part29')}</p>
            <p>{t('about.part30')}</p>
            <p>{t('about.part31')}</p>
            <p>{t('about.part32')}</p>
            <p>{t('about.part33')}</p>
            <p>{t('about.part34')}</p>
            <p>{t('about.part35')}</p>
            <p>{t('about.part36')}</p>
            <p>{t('about.part37')}</p>
            <p>{t('about.part38')}</p>
            <p>{t('about.part39')}</p>
            <p>{t('about.part40')}</p>
            <p>{t('about.part41')}</p>
            <p>{t('about.part42')}</p>
            <p>{t('about.part43')}</p>
            <p>{t('about.part44')}</p>
            <p>{t('about.part45')}</p>
            <p>{t('about.part46')}</p>
            <p>{t('about.part47')}</p>
            <p>{t('about.part48')}</p>
            <p>{t('about.part49')}</p>
            <p>{t('about.part50')}</p>
            <p>{t('about.part51')}</p>
            <p>{t('about.part52')}</p>
            <p>{t('about.part53')}</p>
            <p>{t('about.part54')}</p>
            <p>{t('about.part55')}</p>
            <p>{t('about.part56')}</p>
            <p>{t('about.part57')}</p>
            <p>{t('about.part58')}</p>
            <p>{t('about.part59')}</p>
            <p>{t('about.part60')}</p>
            <p>{t('about.part61')}</p>
            <p>{t('about.part62')}</p>
            <p>{t('about.part63')}</p>
          </Box>
        </Box>
      </Box >
    </div>
  )
}