import { AnyAction, CombinedState, ThunkDispatch } from "@reduxjs/toolkit";
import { GetMovies } from "state/actions/moviesActions";
import { DefaultMoviesState } from "state/reducers/moviesrReducer";

export const getMovies = async (dispatch:ThunkDispatch<CombinedState<{
    movies: DefaultMoviesState;
    language: string;
}>, undefined, AnyAction>) => {

    try {
        await dispatch(GetMovies());
    } catch (error) {
        console.error(error);
    }
};
