import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  Container,
  Box,
  Link as NavLink,
  Stack,
  IconButton,
  Avatar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const pages = [
  { href: "/", title: "Home" },
  { href: "/work", title: "Our Work" },
  { href: "/blog", title: "Blog" },
  { href: "/about", title: "About Us" },
  { href: "/contact", title: "Contact Us" },
];

const Nav = () => {
  const router = useRouter();
  const [background, setBackground] = useState();
  const [color, setColor] = useState();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    setBackground(() => (router.asPath === "/" ? "#000" : "#fff"));
    setColor(() => (router.asPath === "/" ? "white" : "black"));
  }, [router.asPath]);

  useEffect(() => {
    if (openMobileMenu) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [openMobileMenu]);

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
          // boxShadow: 2,
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: 3,
          background,
        }}
      >
        <Container maxWidth="lg" sx={{ color }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              src="/logo.png"
              alt="the ninja developers"
              width="230"
              height="90"
            />
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {pages.map((page) => (
                <Link key={page.title} href={page.href}>
                  <NavLink underline="hover" color={color}>
                    {page.title}
                  </NavLink>
                </Link>
              ))}
            </Box>
            <Box
              color="#c44569"
              sx={{ display: { xs: "inline-block", md: "none" } }}
            >
              <IconButton
                aria-label="Open Menu"
                color="inherit"
                onClick={() => setOpenMobileMenu(true)}
              >
                <MenuIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: openMobileMenu ? "flex" : "none", md: "none" },
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                backgroundColor: "#fff",
                position: "absolute",
                top: 0,
                left: 0,
                height: "100vh",
                width: "100%",
                zIndex: 999,
              }}
            >
              <Box
                color="#c44569"
                sx={{
                  display: { xs: "inline-block", md: "none" },
                  position: "absolute",
                  top: 20,
                  right: 20,
                }}
              >
                <IconButton
                  aria-label="Open Menu"
                  color="inherit"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  <CloseOutlinedIcon sx={{ fontSize: 60 }} />
                </IconButton>
              </Box>
              <Stack spacing={4}>
                {pages.map((page) => (
                  <Link key={page.title} href={page.href}>
                    <NavLink
                      underline="none"
                      color="#222"
                      sx={{ fontSize: 30 }}
                      onClick={() => setOpenMobileMenu(false)}
                    >
                      <span className="curvedUnderline">{page.title}</span>
                    </NavLink>
                  </Link>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Nav;
