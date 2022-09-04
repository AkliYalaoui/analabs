import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{ marginTop: 14, padding: 4, backgroundColor: "#111", color: "#fff" }}
      component="footer"
    >
      <Container maxWidth="md" sx={{ mb: 2, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} align="center">
            <Typography variant="h4" component="h1" fontWeight="bold" mb={4}>
              <span className="curvedUnderline">ANAlabs</span>
            </Typography>
            <Typography variant="body2" color="#eee" paragraph>
              Our team of engineers build high quality scalable <br /> web and
              mobile applications and AI solutions
            </Typography>

            <Button variant="contained">Contact Us</Button>
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
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    +213
                  </a>
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Facebook
                  </a>
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Instagram
                  </a>
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    Email
                  </a>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Typography align="center" variant="body1" mt={4}>
        All rights reserved {new Date().getFullYear()} &copy;{" "}
        <span style={{ fontWeight: "bold" }}>ANALABS</span>
      </Typography>
    </Box>
  );
};

export default Footer;
