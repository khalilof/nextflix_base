import { getMovieByIdAPI } from '@/app/helper/ApiURLFactory';
import addData from '@/app/firebase/addDoc';
import { watchListCollection } from '@/app/api/movies/constants';


export async function handleAddToWatchListRequest(movieId: string) {

    // call IMDB API to fetch movie infos
    const movieAPIResponse = await fetch(getMovieByIdAPI(movieId));
    const movie = await movieAPIResponse.json();

    const movieToAdd = {
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview: movie.overview,
        id: movie.id,
    }
    const {result, error} = await addData(watchListCollection, String(movie.id), movieToAdd);
    return {result, error};
}