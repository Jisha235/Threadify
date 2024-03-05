import * as React from 'react';
import { Container, Grid, TextField, Typography, Button, Paper, Box, Link, Stack } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Room, Phone, Email } from '@mui/icons-material';

const ContactPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" fontWeight="bold">
        Contact Us
      </Typography>
      
      <Grid container spacing={6}>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, minHeight: 450 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Let's Connect
            </Typography>
            <Box display="flex" alignItems="center" my={2}>
              <Room sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="body1">123 Threadify Way, Fashion District, NY 10001</Typography>
            </Box>
            <Box display="flex" alignItems="center" my={2}>
              <Phone sx={{ mr: 1, color: "primary.main" }} />
              <Link href="tel:+18001234567" color="inherit" underline="hover">(800) 123-4567</Link>
            </Box>
            <Box display="flex" alignItems="center" my={2}>
              <Email sx={{ mr: 1, color: "primary.main" }} />
              <Link href="mailto:support@threadify.com" color="inherit" underline="hover">support@threadify.com</Link>
            </Box>
            <Typography variant="h6" gutterBottom fontWeight="bold" mt={4}>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" color="inherit"><Facebook /></Link>
              <Link href="#" color="inherit"><Twitter /></Link>
              <Link href="#" color="inherit"><Instagram /></Link>
              <Link href="#" color="inherit"><LinkedIn /></Link>
            </Stack>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, minHeight: 450 }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Send a Message
            </Typography>
            <form noValidate autoComplete="off">
              <TextField fullWidth label="Full Name" variant="outlined" margin="normal" />
              <TextField fullWidth label="Email Address" variant="outlined" margin="normal" />
              <TextField fullWidth label="Subject" variant="outlined" margin="normal" />
              <TextField fullWidth label="Message" variant="outlined" margin="normal" multiline rows={4} />
              <Button variant="contained" color="primary" sx={{ mt: 3 }}>Submit</Button>
            </form>
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
};

export default ContactPage;
