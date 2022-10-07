import {
  Container,
  Typography,
  Paper,
  Stack,
  Grid,
  Chip,
  Link,
} from "@mui/material";
import Image from "next/image";
import Head from "next/head";

const work = ({ projects }) => {
  return (
    <>
      <Head>
        <title>The Ninja Developers | Projects</title>
        <meta
          name="description"
          content="The Ninja Developers Projects ... here we present our previous projects"
        />
        <meta property="og:url" content="/work" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Ninja Developers | Projects" />
        <meta
          property="og:description"
          content="Made in our labs. Here we present our real world projects and our open source contributions."
        />
        <meta property="og:image" content={projects[0].images[0]} />
      </Head>
      <Container maxWidth="md" component="section" sx={{ marginTop: 15 }}>
        <Typography
          sx={{ typography: { sm: "h2", xs: "h3" } }}
          fontWeight="bold"
          component="h2"
          gutterBottom
          align="center"
        >
          <span className="curvedUnderline"> Made in our labs</span>
        </Typography>
        <Typography
          sx={{ typography: { sm: "h5", xs: "h6" } }}
          color="text.secondary"
          paragraph
          mb={5}
          align="center"
        >
          Here we present our real world projects and our open source
          contributions.
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Paper sx={{ padding: 2 }} elevation={3}>
                <Typography
                  sx={{ typography: { sm: "h3", xs: "h4" } }}
                  gutterBottom
                  align="center"
                >
                  {project.title}
                </Typography>
                <Typography
                  paragraph
                  color="text.secondary"
                  align="center"
                  gutterBottom
                >
                  {project.description}
                </Typography>
                <div
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    width: "100%",
                    height: "300px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    layout="fill"
                  />
                </div>
                <Stack direction="row" spacing={1} mb={2}>
                  {project.techs.map((tech) => (
                    <Chip key={tech} label={tech} />
                  ))}
                </Stack>
                <Stack spacing={1}>
                  {project.links.map((link) => (
                    <Link
                      key={link}
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      # {link}
                    </Link>
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

export default work;

import getProjects from "../utils/getProjects";

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: projects,
  };
}
