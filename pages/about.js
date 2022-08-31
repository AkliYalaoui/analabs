import Head from "next/head";
import { Container, Typography, Paper, Grid } from "@mui/material";
import CoFounder from "../src/CoFounder";

const about = () => {
  return (
    <>
      <Head>
        <title>ANALABS | About Us</title>
        <meta
          name="description"
          content="The official website for the ANAlabas team. we are computer scientist with divers background in the feild. we make your ideas concret and solve your problems. we develop mobile apps, web apps and AI solutions"
        />
      </Head>
      <Container maxWidth="lg" component="section">
        <Typography variant="h2" fontWeight="bold" component="h2" gutterBottom>
          We create scalable digital <br />
          solutions.
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph mb={5}>
          Our team of engineers build high quality, scalable web and <br />
          mobile applications and AI solutions.
        </Typography>
        <Typography variant="h4" fontWeight="bold" component="h2" gutterBottom>
          Meet the team
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph mb={5}>
          We are a team of diverse and complementary backgrounds,
          <br /> we share the same passion,
          <br /> we love what we do and we excel in doing it.
        </Typography>
        <Grid container spacing={2}>
          <Grid align="center" item xs={12} sm={4}>
            <CoFounder
              profile="/static/akli.webp"
              alt="Akli Yalaoui - Web developer & Data scientist"
              title="Akli Yalaoui"
              description=" Web developer & Data scientist - Final year student at higher
        national school of algiers ESI ex-INI"
              facebook="https://www.facebook.com/YalaouiAkli/"
              github="https://github.com/AkliYalaoui"
              instagram="https://www.instagram.com/yalaoui_kouki"
            />
          </Grid>
          <Grid align="center" item xs={12} sm={4}>
            <CoFounder
              profile="/static/chelfi.jpg"
              alt="Abdelbassit Abed-meraim - Mobile developer & Designer"
              title="Abdelbassit Abed-meraim"
              description="Mobile developer & Designer - Final year student at higher
        national school of algiers ESI ex-INI"
              facebook="https://www.facebook.com/basset.abedmeraim"
              github="https://github.com/AbdelbassitAb"
              instagram="https://www.instagram.com/basset_ab"
            />
          </Grid>
          <Grid align="center" item xs={12} sm={4}>
            <CoFounder
              profile="/static/nassim.jpg"
              alt="Nassim Fatmi - Web developer & Mobile developer"
              title="Nassim Fatmi"
              description="Mobile developer & web developer - Final year student at higher
        national school of algiers ESI ex-INI"
              facebook="https://www.facebook.com/nassim.fatmi01"
              github="https://github.com/NassimFatmi"
              instagram="https://www.instagram.com/nassim.xii"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default about;