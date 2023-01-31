import React, { useRef } from "react";
import { Box, TextField, Container, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export function Contacts() {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    handleToggle();
    emailjs.sendForm('service_q08qzr9', 'template_hyltpc3', form.current, 'ZTh-YEaBqy6GzkrBC')
      .then((result) => {
        if (result.text === "OK") {
          setOpen(false);
          window.location.href = './emailsended';
        }
      }, (error) => {
        window.location.href = './emailerror';
        //console.log(error.text);
      });
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Container maxWidth="sm">
      <Box lineHeight={1.5} display={'flex'} flexDirection={'column'} alignItems={'normal'}
        sx={{ boxShadow: '0 0 20px black', textIndent: '0px', fontSize: '1rem', backgroundColor: '#645452', paddingLeft: 2, paddingRight: 2 }}>
        <Box py={2}>
          <h1>{t('contacts.part1')}</h1>
          <form ref={form} onSubmit={sendEmail}>
            <Typography gutterBottom color="white" variant="body2" component="p">{t('contacts.part2')}</Typography>
            <TextField type='email' name="user_email" variant="outlined" placeholder={t('contacts.part3')} sx={{ input: { color: 'white' } }} fullWidth required></TextField>
            <br></br><br></br>
            <TextField name="message" variant="outlined" placeholder={t('contacts.part4')} inputProps={{ style: { color: "white" } }}
              multiline rows={5} fullWidth required></TextField>
            <br></br><br></br>
            <Button type='submit' variant="outlined" style={{ backgroundColor: "white" }}>{t('contacts.part5')}</Button>
          </form>
          <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      </Box>
    </Container>
  )
}

export default Contacts;