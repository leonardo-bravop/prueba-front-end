import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Popover,
  Box,
  Divider,
} from "@mui/material";
import React from "react";
import { Movie } from "types";
const baseUrl = "https://image.tmdb.org/t/p";

const MovieCard = ({
  title,
  poster_path,
  poster_size,
  vote_average,
  vote_count,
  release_date,
  overview,
}: Movie) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Card
      sx={{
        width: "200px",
        my: "10px",
      }}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300px"
          image={`${baseUrl}/w${poster_size}/${poster_path}`}
          alt={title}
        ></CardMedia>

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "85px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Typography gutterBottom variant="subtitle2" component="div">
            {title}
          </Typography>

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
            <Box sx={{ width: "300px" }}>
              <Typography sx={{ p: 1 }} variant="subtitle1">
                {title}
              </Typography>
              <Divider />
              <Box sx={{ p: 1, display: "flex" }}>
                <Typography fontWeight={"bold"}>
                  {vote_count ? vote_average : "NA"}/10
                </Typography>
                <Typography ml={1}>
                  {`(${release_date.substring(0, 4)})`}
                </Typography>
              </Box>
              <Typography sx={{ p: 1 }} paragraph variant="body2">
                {overview.length > 250
                  ? overview.substring(0, 250).trim() + "[...]"
                  : overview}
              </Typography>
            </Box>
          </Popover>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
