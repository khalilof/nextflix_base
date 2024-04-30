import getCollection from '@/app/firebase/getCollection';
import { watchListCollection } from '@/app/api/movies/constants';

export async function getWatchList() {
    const { result, error } = await getCollection(watchListCollection);

    if (error) {
         console.log(error);
    }
    return {result, error};
}