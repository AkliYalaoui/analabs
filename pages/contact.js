import Head from "next/head";
import Image from "next/image";
import {
  Container,
  TextField,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";

const contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Head>
        <title>ANALABS | Contact Us</title>
        <meta
          name="description"
          content="The official website for the ANAlabas team. we are computer scientist with divers background in the feild. we make your ideas concret and solve your problems. we develop mobile apps, web apps and AI solutions"
        />
      </Head>
      <Container maxWidth="md" component="section" sx={{ marginTop: 15 }}>
        <Typography variant="h2" fontWeight="bold" align="center" component="h2" gutterBottom>
          <span className="curvedUnderline">Get in touch with us now</span>
        </Typography>
        <Typography variant="h5" color="text.secondary" align="center" paragraph mb={3}>
          What problems can we resolve for you ? <br />
          we reply instantly
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                required
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                required
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                required
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                label="Phone Number"
                variant="outlined"
                margin="normal"
                type="tel"
                fullWidth
              />
            </Grid>
          </Grid>
          <TextField
            id="subject"
            label="Subject"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={6}
            required
            fullWidth
          />
          <Box mt={2} align="right">
            <Button type="submit" variant="contained" size="large">
              Get in touch
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default contact;
