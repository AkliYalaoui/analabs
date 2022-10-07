import { Box, Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

const HeaderSection = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: "600px",
        backgroundImage: "url('/bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,.5)",
        }}
      ></Box>
      <Container
        maxWidth="md"
        sx={{ padding: 2, position: "relative", zIndex: "2" }}
      >
        <Box
          component="section"
          align="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Typography
            sx={{ typography: { md: "h1", sm: "h2", xs: "h3" } }}
            component="h2"
            fontWeight="bold"
            color="#fff"
            gutterBottom
          >
            We develop high quality products.
          </Typography>
          <Typography
            sx={{ typography: { sm: "h6", xs: "body1" } }}
            color="#eee"
            paragraph
          >
            We are a team of computer science freelancers specialized in web
            developement, <br />
            mobile developement and AI who will make your ideas alive.
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              router.push("/contact");
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderSection;
