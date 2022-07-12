import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import moviesReducer from "./moviesrReducer";

const RootReducer = combineReducers({
    movies: moviesReducer,
    language: languageReducer,
});

export default RootReducer