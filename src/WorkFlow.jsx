import { Typography, Container, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import GroupsIcon from "@mui/icons-material/Groups";
import FeedIcon from "@mui/icons-material/Feed";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const WorkFlow = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{ backgroundColor: "#111", color: "#fff", padding: 4, marginTop: 8 }}
    >
      <Container maxWidth="md" component="section">
        <Typography
          sx={{ typography: { sm: "h3", xs: "h4" } }}
          align="center"
          color="white"
          mb={6}
        >
          <span className="curvedUnderline">WorkFlow : How it&apos;s done</span>
        </Typography>
        <Timeline position={matches ? "alternate" : "right"}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
              <TimelineDot>
                <GroupsIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Meetings
              </Typography>
              <Typography color="#ddd">
                Learn about your needs and wants by scheduling meetings with you
                and your team.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
              <TimelineDot>
                <FeedIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                SRS
              </Typography>
              <Typography color="#ddd">
                Understand deeply your problem and write a system requirements
                specifications.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
              <TimelineDot>
                <TipsAndUpdatesIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Solution Architecture
              </Typography>
              <Typography color="#ddd">
                At this step, we design the solution and define its
                architecture.{" "}
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
              <TimelineDot>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Code
              </Typography>
              <Typography color="#ddd">
                Develop functional and scalable products.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
              <TimelineDot>
                <RocketLaunchIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Deploy
              </Typography>
              <Typography color="#ddd">
                Deliver your product and launch it.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
};

export default WorkFlow;
