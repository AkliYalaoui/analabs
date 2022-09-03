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
        <title>ANALABS | Projects</title>
        <meta
          name="description"
          content="Analabs Projects ... here we present our previous projects"
        />
      </Head>
      <Container maxWidth="lg" component="section" sx={{ marginTop: 15 }}>
        <Typography variant="h2" fontWeight="bold" component="h2" gutterBottom>
          <span className="curvedUnderline"> Made in our labs</span>
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph mb={5}>
          Here we present our real world projects <br />
          and our open source contributions.
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Paper sx={{padding:2}} elevation={3}>
                <Typography variant="h3" gutterBottom>
                  {project.title}
                </Typography>
                <Typography paragraph color="text.secondary" gutterBottom>
                  {project.description}
                </Typography>
                <div
                  style={{
                    marginTop:"10px",
                    marginBottom:"10px",
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
