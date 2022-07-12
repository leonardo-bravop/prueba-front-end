import { Alert, Box, Button } from "@mui/material";
import { getMovies } from "services/getMovies";
import { useAppDispatch } from "state/hooks";

const ErrorLoadingMovies = () => {
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Alert severity="error" sx={{ mb: 2 }}>
        Ups! There was en error loading the movies. Please use the button to
        retry.
      </Alert>

      <Button variant="contained" onClick={() => getMovies(dispatch)}>
        Load Movies
      </Button>
    </Box>
  );
};

export default ErrorLoadingMovies;
