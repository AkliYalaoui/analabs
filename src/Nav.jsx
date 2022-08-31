import Link from "next/link";
import { Typography, Container, Box, Link as NavLink } from "@mui/material";
import React from "react";

const pages = [
  { href: "/", title: "Home" },
  { href: "/work", title: "Our Work" },
  { href: "/blog", title: "Blog" },
  { href: "/about", title: "About Us" },
  { href: "/contact", title: "Contact Us" },
];

const Nav = () => {
  return (
    <Box component="nav" sx={{ boxShadow: 2, marginBottom: 8 }}>
      <Container maxWidth="lg" sx={{ padding: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" component="h1" noWrap fontWeight="bold">
            ANA<span style={{ color: "#0984e3" }}>labs</span>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {pages.map((page) => (
              <Link key={page.title} href={page.href}>
                <NavLink underline="hover" color="#333">
                  {page.title}
                </NavLink>
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Nav;
