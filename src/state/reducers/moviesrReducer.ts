
import { MoviesDispatchTypes, MOVIES_FAIL, MOVIES_LOADING, MOVIES_SUCCESS } from "state/actions/actionTypes";
import { Movie } from "types";

export interface DefaultMoviesState {
    loading: boolean,
    movies?: Movie[]
  }
  
  const defaultState: DefaultMoviesState = {
    loading: false
  };
  
  const moviesReducer = (state: DefaultMoviesState = defaultState, action: MoviesDispatchTypes) : DefaultMoviesState => {
    switch (action.type) {
      case MOVIES_FAIL:
        return {
          loading: false,
        }
      case MOVIES_LOADING:
        return {
          loading: true,
        }
      case MOVIES_SUCCESS:
        return {
          loading: false,
          movies: action.payload
        }
      default:
        return state
    }
  };
  
  
  export default moviesReducer