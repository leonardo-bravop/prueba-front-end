import { Box, Divider, Paper, Popover, Typography } from "@mui/material";
import { Movie } from "types/movieInterface";
import { baseUrl } from "services/utils";

interface Props extends Movie {
  open: boolean;
  anchorEl: HTMLElement | null;
  handlePopoverClose: () => void;
}

const poster_size = 300;

const CardDetails = ({
  title,
  vote_count,
  vote_average,
  release_date,
  overview,
  backdrop_path,
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
      <Paper sx={{ width: "260px" }}>
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <Box
            component={"img"}
            src={`${baseUrl}/w${poster_size}/${backdrop_path}`}
            sx={{
              objectFit: `cover`,
              color: "black",
              filter: "brightness(40%) opacity(0.9)",
              position: "absolute",
              height: "100%",
              width: "100%",
            }}
          ></Box>
          <Box sx={{ position: "relative" }}>
            <Typography
              sx={{ p: 1 }}
              variant="subtitle1"
              fontWeight={"bold"}
              color={"white"}
            >
              {title}
            </Typography>
          </Box>
        </Box>

        <Divider />
        <Box sx={{ p: 1, mt: 1, display: "flex" }}>
          <Typography fontWeight={"bold"}>
            {vote_count ? vote_average : "NA"}/10
          </Typography>
          <Typography ml={1}>{`(${release_date.substring(0, 4)})`}</Typography>
        </Box>
        <Typography sx={{ p: 1, pb: 2 }} variant="body2">
          {overview.length > 415
            ? overview.substring(0, 415).trim() + "[...]"
            : overview}
        </Typography>
      </Paper>
    </Popover>
  );
};

export default CardDetails;
