import { Typography, Paper, Stack } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const CoFounder = ({
  profile,
  alt,
  title,
  description,
  facebook,
  github,
  instagram,
}) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <div
        style={{
          width: "180px",
          height: "180px",
          position: "relative",
          marginBottom: "10px",
        }}
      >
        <Image
          src={profile}
          alt={alt}
          layout="fill"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <Typography variant="h6" fontWeight="bold" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph gutterBottom>
        {description}
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <a href={facebook} target="_blank" rel="noreferrer noopener">
          <FacebookIcon />
        </a>
        <a href={instagram} target="_blank" rel="noreferrer noopener">
          <InstagramIcon />
        </a>
        <a href={github} target="_blank" rel="noreferrer noopener">
          <GitHubIcon />
        </a>
      </Stack>
    </Paper>
  );
};

export default CoFounder;
