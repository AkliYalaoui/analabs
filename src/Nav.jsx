import Link from "next/link";
import { Typography, Container, Box, Link as NavLink } from "@mui/material";
import React, { useState, useEffect } from "react";

const pages = [
  { href: "/", title: "Home" },
  { href: "/work", title: "Our Work" },
  { href: "/blog", title: "Blog" },
  { href: "/about", title: "About Us" },
  { href: "/contact", title: "Contact Us" },
];

const Nav = () => {
  const [background, setBackground] = useState("#000");

  // useEffect(() => {

  //   const onScroll = (e) => {
  //     const top = document.body.scrollTop || document.documentElement.scrollTop;
  //     if (top > 0) {
  //       setBackground("#000");
  //     } else {
  //       setBackground("");
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <>
      <Box
        component="nav"
        sx={{
          boxShadow: 2,
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: 3,
          background
        }}
      >
        <Container maxWidth="lg" sx={{ padding: 1, color: "#fff" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" component="h1" noWrap fontWeight="bold">
              ANA<span style={{ color: "#e15f41" }}>labs</span>
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {pages.map((page) => (
                <Link key={page.title} href={page.href}>
                  <NavLink underline="hover" color="#fff">
                    {page.title}
                  </NavLink>
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Nav;
