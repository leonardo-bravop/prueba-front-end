import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CardDetails from "commons/CardDetails";
import React from "react";
import { Movie } from "types/movieInterface";
import { baseUrl } from "services/utils";

const MovieCard = (props: Movie) => {
  const { title, poster_path, poster_size } = props;

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

          <CardDetails
            {...props}
            open={open}
            anchorEl={anchorEl}
            handlePopoverClose={handlePopoverClose}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
