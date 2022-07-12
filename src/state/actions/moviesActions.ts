import { Dispatch } from "redux";
import axios from "axios";
import { MoviesDispatchTypes, MOVIES_FAIL, MOVIES_LOADING, MOVIES_SUCCESS } from "./actionTypes";

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export const GetMovies = (probability: number = 15) => async (dispatch: Dispatch<MoviesDispatchTypes>) => {
    try {
        dispatch({
            type: MOVIES_LOADING
        })

        const success = getRandomInt(1, 100);
        console.log(`success`, success);
        console.log(`threshold`, probability);
        

        if (success > probability) {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language=en-US&page=${1}`);
            const res2 = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language=en-US&page=${2}`);
            const res3 = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language=en-US&page=${3}`);
            const res4 = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language=en-US&page=${4}`);
            const res5 = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6&language=en-US&page=${5}`);

            dispatch({
                type: MOVIES_SUCCESS,
                payload: res.data.results.concat(res2.data.results, res3.data.results, res4.data.results, res5.data.results)
            })
        }
        else {
            throw new Error("Could not load movies")
        }
    } catch (e) {
        dispatch({
            type: MOVIES_FAIL
        })
    }
};