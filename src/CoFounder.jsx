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
    <Paper elevation={3} sx={{ padding: 2,borderBottom:"2px solid #e15f41" }}>
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
        <a href={facebook} target="_blank" rel="noreferrer noopener" style={{color:"#4267B2"}}>
          <FacebookIcon/>
        </a>
        <a href={instagram} target="_blank" rel="noreferrer noopener" style={{color:"#C13584"}}>
          <InstagramIcon />
        </a>
        <a href={github} target="_blank" rel="noreferrer noopener" style={{color:"#333"}}>
          <GitHubIcon />
        </a>
      </Stack>
    </Paper>
  );
};

export default CoFounder;
