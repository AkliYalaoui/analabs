import Head from "next/head";
import Image from "next/image";
import Date from "../../src/Date";
import Link from "next/link";
import { Container, Typography, Stack, Paper, Grid, Chip } from "@mui/material";

const blog = ({ allBlogsData }) => {
  return (
    <>
      <Head>
        <title>The Ninja Developers | Blog</title>
        <meta
          name="description"
          content="The ninja developers blog ... here we share our thoughts and our work clearly explained."
        />
        <meta property="og:url" content="/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Ninja Developers | Blog" />
        <meta
          property="og:description"
          content="Check out all blogs written by the ninja developers team"
        />
        <meta property="og:image" content={allBlogsData[0].thumbnail} />
      </Head>
      <Container maxWidth="md" component="section" sx={{ marginTop: 15 }}>
        <Typography
          sx={{ typography: { sm: "h2", xs: "h3" } }}
          fontWeight="bold"
          component="h2"
          gutterBottom
          align="center"
        >
          <span className="curvedUnderline"> Written by us</span>
        </Typography>
        <Typography
          sx={{ typography: { sm: "h5", xs: "h6" } }}
          color="text.secondary"
          paragraph
          align="center"
          mb={5}
        >
          Sharing our thoughts and experience during the apps developement
          process.
        </Typography>
        <Grid container spacing={4}>
          {allBlogsData.map((blogData) => (
            <Grid item key={blogData.title} xs={12} sm={6}>
              <Paper sx={{ padding: 2 }} elevation={3}>
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={blogData.thumbnail}
                    alt={blogData.title}
                    layout="fill"
                  />
                </div>
                <Link href={`/blog/${blogData.id}`}>
                  <a>
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight="bold"
                      gutterBottom
                    >
                      {blogData.title}
                    </Typography>
                  </a>
                </Link>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  paragraph
                  gutterBottom
                >
                  {blogData.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Author : {blogData.author}
                </Typography>
                <Date dateString={blogData.date} />
                <Stack direction="row" spacing={1} mt={1}>
                  {blogData.keywords.map((keyword) => (
                    <Chip key={keyword} label={keyword} />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default blog;

import { getSortedBlogsData } from "../../utils/getBlogs";

export async function getStaticProps() {
  const allBlogsData = getSortedBlogsData();
  return {
    props: { allBlogsData },
  };
}
