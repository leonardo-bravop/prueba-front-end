import { Movie } from "types";

export const MOVIES_LOADING = "MOVIES_LOADING";
export const MOVIES_FAIL = "MOVIES_FAIL";
export const MOVIES_SUCCESS = "MOVIES_SUCCESS";
export const SET_LANGUAGE = "SET_LANGUAGE"

export interface MoviesLoading {
    type: typeof MOVIES_LOADING
}

export interface MoviesFail {
    type: typeof MOVIES_FAIL
}

export interface MoviesSuccess {
    type: typeof MOVIES_SUCCESS,
    payload: Movie[]
}

export interface Language {
    value: string
}

export interface languageAction {
    type: string
    language: Language
}

export type DispatchType = (args: languageAction) => languageAction


export type MoviesDispatchTypes = MoviesLoading | MoviesFail | MoviesSuccess
