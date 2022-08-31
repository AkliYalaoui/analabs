import { Container, Typography, Stack, Grid, Chip, Link } from "@mui/material";
import Image from "next/image";
import Head from "next/head";

const work = ({ projects }) => {
  return (
    <>
      <Head>
        <title>ANALABS | Projects</title>
        <meta
          name="description"
          content="Analabs Projects ... here we present our previous projects"
        />
      </Head>
      <Container maxWidth="lg" component="section">
        <Typography variant="h2" fontWeight="bold" component="h2" gutterBottom>
          Made in our labs
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph mb={5}>
          Here we present our real world projects <br />
          and our open source contributions.
        </Typography>
        <Stack spacing={4}>
          {projects.map((project, index) => (
            <Grid
              container
              direction={index % 2 === 0 ? "row" : "row-reverse"}
              key={project.id}
              sx={{
                border: "1px solid #333",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography variant="h3" gutterBottom>
                  {project.title}
                </Typography>
                <Typography paragraph color="text.secondary" gutterBottom>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} mb={2}>
                  {project.techs.map((tech) => (
                    <Chip key={tech} label={tech} />
                  ))}
                </Stack>
                <Stack spacing={1}>
                  {project.links.map((link) => (
                    <Link key={link} href={link} target="_blank" rel="noreferrer noopener">
                      # {link}
                    </Link>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div
                  style={{
                    width: "100%",
                    height: "400px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    layout="fill"
                  />
                </div>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default work;

import getProjects from "../utils/getProjects";

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: projects,
  };
}
