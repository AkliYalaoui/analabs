import { parseISO, format } from "date-fns";
import { Typography } from "@mui/material";

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      gutterBottom
      component="time"
      dateTime={dateString}
    >
      {format(date, "LLLL d, yyyy")}
    </Typography>
  );
};

export default Date;
