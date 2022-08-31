import Head from "next/head";
import Image from "next/image";
import Date from "../../src/Date";
import Link from "next/link";
import { Container, Typography, Stack, Paper, Grid, Chip } from "@mui/material";

const blog = ({ allBlogsData }) => {
  return (
    <>
      <Head>
        <title>ANALABS | Blog</title>
        <meta
          name="description"
          content="Analabs blog ... here we share our thoughts and our work clearly explained."
        />
      </Head>
      <Container maxWidth="lg" component="section">
        <Typography variant="h2" fontWeight="bold" component="h2" gutterBottom>
          Written by us
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph mb={5}>
          Sharing our thoughts and experience
          <br /> during the apps developement process.
        </Typography>
        <Grid container spacing={4}>
          {allBlogsData.map((blogData) => (
            <Grid item key={blogData.title} xs={12} sm={6} md={4}>
              <Paper sx={{ padding: 2 }} elevation={3}>
                <div
                  style={{
                    width: "100%",
                    height: "200px",
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
