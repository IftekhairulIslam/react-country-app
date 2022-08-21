import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/movies";
const movieUrl = (id) => `${apiEndPoint}/${id}`;

export function getMovies() {
    return http.get(apiEndPoint);
}

export function getMovie(id) {
    return http.get(movieUrl(id));
}

export function saveMovie(movie) {
    if (movie._id) {
        const data = { ...movie };
        delete data._id;
        return http.put(movieUrl(movie._id), data);
    }

    return http.post(apiEndPoint, movie);
}

export function deleteMovie(id) {
    return http.delete(movieUrl(id));
}
