import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <Box
      sx={{ marginTop: 14, padding: 4, backgroundColor: "#111", color: "#fff" }}
      component="footer"
    >
      <Container maxWidth="md" sx={{ mb: 2, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} align="center">
            <Typography variant="h4" component="h1" fontWeight="bold" mb={4}>
              <span className="curvedUnderline">The ninja developers</span>
            </Typography>
            <Typography variant="body2" color="#eee" paragraph>
              Our team of engineers build high quality scalable <br /> web and
              mobile applications and AI solutions
            </Typography>

            <Button
              variant="contained"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contact Us
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6" color="#aaa" gutterBottom>
                  Company
                </Typography>
                <Stack spacing={2}>
                  <Link href="/">Home</Link>
                  <Link href="/work">Work</Link>
                  <Link href="/blog">blog</Link>
                  <Link href="/about">About</Link>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" color="#aaa" gutterBottom>
                  Social Media
                </Typography>
                <Stack spacing={2}>
                  <a
                    href="tel:0673347704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1"
                  >
                    <span>+213540625774</span>
                  </a>

                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Facebook
                  </a>
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Instagram
                  </a>
                  <a
                    href="mailto:contact@thedevelopers.ninja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1"
                  >
                    <span>contact@thedevelopers.ninja</span>
                  </a>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Typography align="center" variant="body1" mt={4}>
        All rights reserved {new Date().getFullYear()} &copy;{" "}
        <span style={{ fontWeight: "bold" }}>The ninja developers</span>
      </Typography>
    </Box>
  );
};

export default Footer;
