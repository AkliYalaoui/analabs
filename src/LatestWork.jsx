import Link from "next/link";
import {
  Grid,
  Typography,
  Container,
  Stack,
  Button,
  Box,
  Paper,
} from "@mui/material";

const LatestWork = () => {
  return (
    <Container maxWidth="md" component="section" sx={{ marginTop: 8 }}>
      <Typography variant="h3" align="center" color="text.secondary" mb={6}>
        <span className="curvedUnderline"> Latest Work</span>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{ padding: 2, borderTop: "2px solid #e15f41" }}
            align="center"
            elevation={3}
          >
            <Typography variant="h3" gutterBottom>
              Videvet
            </Typography>
            <Typography paragraph color="text.secondary" gutterBottom>
              Videvet is a mobile application for cloths ecommerce
            </Typography>
            <video
              height="400px"
              width="100%"
              playsInline
              autoPlay
              muted
              loop
              src="https://gojilabs.com/wp-content/uploads/2022/01/Goji-Hero-v2-1.mp4"
            ></video>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{ padding: 2, borderTop: "2px solid #e15f41" }}
            align="center"
            elevation={3}
          >
            <Typography variant="h3" gutterBottom>
              ADtech
            </Typography>
            <Typography paragraph color="text.secondary" gutterBottom>
              An app that aims to digitize all the work in dental universities
            </Typography>
            <video
              height="400px"
              width="100%"
              playsInline
              autoPlay
              muted
              loop
              src="https://gojilabs.com/wp-content/uploads/2022/01/Goji-Hero-v2-1.mp4"
            ></video>
          </Paper>
        </Grid>
      </Grid>
      <Box mt={4} align="center">
        <Button variant="contained" size="large">
          See more
        </Button>
      </Box>
    </Container>
  );
};

export default LatestWork;
