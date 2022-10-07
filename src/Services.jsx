import { Grid, Typography, Paper, Box, Container } from "@mui/material";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LaptopIcon from "@mui/icons-material/Laptop";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import DesktopMacIcon from '@mui/icons-material/DesktopMac';

const servicesList = [
  {
    icon: <PhoneAndroidIcon color="primary" sx={{ fontSize: 80 }} />,
    title: "Mobile Applications",
    description:
      "we build modern and attractive mobile applications using flutter framework for the UI and firebase/nodeJs for the backend.",
  },
  {
    icon: <LaptopIcon color="primary" sx={{ fontSize: 80 }} />,
    title: "Web Applications",
    description:
      "we develop robust applications using reactJs/nextJs for the frontend and nodeJs/expressJs for the backend",
  },
  {
    icon: <DesktopMacIcon color="primary" sx={{ fontSize: 80 }} />,
    title: "Desktop Applications",
    description:
      "we develop high quality desktop applications using electronJs with either vanilla javascript or reactJs",
  },
  {
    icon: <SmartToyIcon color="primary" sx={{ fontSize: 80 }} />,
    title: "AI Solutions",
    description:
      "we build powerful ML/DL/NLP models using sklearn/tensorflow, perform data analysis using python/R ",
  },
];
const Services = () => {
  return (
    <Box sx={{ padding: 5 }}>
      <Container maxWidth="lg" component="section">
        <Typography
          sx={{ typography: { sm: "h3", xs: "h4" } }}
          align="center"
          color="text.secondary"
          mb={6}
        >
          <span className="curvedUnderline">Our Services</span>
        </Typography>
        <Grid container spacing={4}>
          {servicesList.map((service) => (
            <Grid key={service.title} item xs={12} sm={6} >
              <Paper sx={{ padding: 2 }} elevation={3}>
                <Box align="center">{service.icon}</Box>
                <Box align="center">
                  <Typography gutterBottom variant="h5" component="h4">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
