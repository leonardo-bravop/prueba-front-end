import { useEffect } from "react";
import { Container } from "@mui/material";
import MoviesGrid from "components/Grid";

import { useAppDispatch, useAppSelector } from "state/hooks";
import LanguageFilter from "components/LanguageFilter";
import { getMovies } from "services/getMovies";
import ErrorLoadingMovies from "components/ErrorLoadingMovies";
import Spinner from "components/Spinner";

const Home = () => {
  const moviesState = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  return (
    <Container>
      <LanguageFilter />
      {moviesState.loading && <Spinner />}
      {moviesState.loading === false && moviesState.movies === undefined && (
        <ErrorLoadingMovies />
      )}
      <MoviesGrid />
    </Container>
  );
};

export default Home;
