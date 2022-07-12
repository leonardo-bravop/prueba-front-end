import Card from "commons/Card";
import { Alert, Box, Grid } from "@mui/material";
import { useAppSelector } from "state/hooks";

const MoviesGrid = () => {
  const { movies } = useAppSelector((state) => state.movies);
  const languageState = useAppSelector((state) => state.language);

  const filteredMovies = languageState
    ? movies?.filter((movie) => movie.original_language === languageState)
    : movies || [];

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent={
          filteredMovies
            ? filteredMovies?.length % 5 === 0
              ? "space-between"
              : "center"
            : "space-between"
        }
        rowSpacing={{ xs: 1, sm: 2, md: 2 }}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {filteredMovies?.map((movie) => (
          <Grid item key={movie.id}>
            <Card {...movie} poster_size={"500"} />
          </Grid>
        ))}
      </Grid>
      {languageState !== "" && filteredMovies?.length === 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert severity="info">0 Resuls for language "{languageState}"</Alert>
        </Box>
      )}
    </>
  );
};

export default MoviesGrid;
