import { Box, Container, Typography, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{ marginTop: 14, padding: 4, backgroundColor: "#111", color: "#fff" }}
      component="footer"
    >
      <Container maxWidth="md" sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Stack spacing={1}>
              <Link href="/">Home</Link>
              <Link href="/work">Our Work</Link>
              <Link href="/blog">Our blog</Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack spacing={1}>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <a href="#" target="_blank" rel="noreferrer noopener">
                +213
              </a>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack spacing={1}>
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
      </Container>
      <Typography align="center" variant="body1" mt={2}>
        All rights reserved {new Date().getFullYear()} &copy;{" "}
        <span style={{ fontWeight: "bold" }}>ANALABS</span>
      </Typography>
    </Box>
  );
};

export default Footer;
