import axios from "axios";
const API_KEY = '4b2d8f7bbb5b1ebcb697644a602d9ce8';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movies/popular'));
    }
}