import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import bg from "../public/bg.gif";
import EmailIcon from "@mui/icons-material/Email";

const HeaderSection = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <Box
        component="section"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ flex: 2 }}>
          <Typography
            variant="h1"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            We develop high quality products.
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            We are a team of computer science freelancers specialized in web
            developement, <br />
            mobile developement and AI who will make your ideas concret.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Image src={bg} />
        </Box>
      </Box>

      <Button variant="contained" startIcon={<EmailIcon />} size="large">
        <Link href="/contact">Get in touch</Link>
      </Button>
    </Container>
  );
};

export default HeaderSection;
