import { Box, Divider, Popover, Typography } from "@mui/material";
import { Movie } from "types/movieInterface";

interface Props extends Movie {
  open: boolean;
  anchorEl: HTMLElement | null;
  handlePopoverClose: () => void;
}

const CardDetails = ({
  title,
  vote_count,
  vote_average,
  release_date,
  overview,
  open,
  anchorEl,
  handlePopoverClose,
}: Props) => {
  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <Box sx={{ width: "260px" }}>
        <Typography sx={{ p: 1 }} variant="subtitle1" fontWeight={"bold"}>
          {title}
        </Typography>
        <Divider />
        <Box sx={{ p: 1, display: "flex" }}>
          <Typography fontWeight={"bold"}>
            {vote_count ? vote_average : "NA"}/10
          </Typography>
          <Typography ml={1}>{`(${release_date.substring(0, 4)})`}</Typography>
        </Box>
        <Typography sx={{ p: 1 }} paragraph variant="body2">
          {overview.length > 250
            ? overview.substring(0, 250).trim() + "[...]"
            : overview}
        </Typography>
      </Box>
    </Popover>
  );
};

export default CardDetails;
