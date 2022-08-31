import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Paper,
  Box,
  Container,
} from "@mui/material";

const servicesList = [
  {
    media: "/static/mob.gif",
    title: "android/ios applications",
    description:
      "we build modern and attractive mobile applications using flutter UI framework which are powered by firebase/nodeJs backend",
  },
  {
    media: "/static/react.gif",
    title: "web applications",
    description:
      "we develop robust apps, static or dynamic websites. We use reactJs/nextJs for the frontend and nodeJs/python for the backend",
  },
  {
    media: "/static/ds.gif",
    title: "AI solutions",
    description:
      "we build powerful ML/DL models, from data preprocessing and exploratory data analysis to model building using python/R ",
  },
];
const Services = () => {
  return (
    <Box sx={{ backgroundColor: "#dfe4ea",padding:5 }}>
      <Container maxWidth="lg" component="section">
        <Typography variant="h3" align="center" mb={4}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {servicesList.map((service) => (
            <Grid key={service.title} item xs={12} sm={6} md={4}>
              <Paper elevation={3}>
                <Card sx={{backgroundColor:"#0984e3",color:"#fff"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={service.media}
                    alt={service.title}
                  />
                  <CardContent align="center">
                    <Typography gutterBottom variant="h5" component="h4">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="#dfe4ea">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
