import Link from "next/link";
import { Grid, Typography, Container, Stack, Button, Box } from "@mui/material";

const LatestWork = () => {
  return (
    <Container maxWidth="lg" component="section" sx={{ marginTop: 8 }}>
      <Typography variant="h3" align="center" mb={4}>
        Latest Work
      </Typography>
      <Stack spacing={4}>
        <Grid
          container
          sx={{
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" gutterBottom>
              Videvet
            </Typography>
            <Typography paragraph color="text.secondary" gutterBottom>
              Videvet is a mobile application for cloths ecommerce
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <video
              height="500px"
              width="100%"
              playsInline
              autoPlay
              muted
              loop
              src="https://gojilabs.com/wp-content/uploads/2022/01/Goji-Hero-v2-1.mp4"
            ></video>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" gutterBottom>
              Videvet
            </Typography>
            <Typography paragraph color="text.secondary" gutterBottom>
              Videvet is a mobile application for cloths ecommerce
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <video
              height="500px"
              width="100%"
              playsInline
              autoPlay
              muted
              loop
              src="https://gojilabs.com/wp-content/uploads/2022/01/Goji-Hero-v2-1.mp4"
            ></video>
          </Grid>
        </Grid>
      </Stack>
      <Box mt={4} align="center">
        <Button variant="contained" size="large">
          <Link href="/work">See more</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default LatestWork;
