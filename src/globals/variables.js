//TMDB documentation https://www.themoviedb.org/documentation/api
const TMDB_API_KEY_ONLY = `8cbb2f7768a12caf72305ec05d30851a`
export const TMDB_API_KEY = `?api_key=${TMDB_API_KEY_ONLY}`
export const TMDB_BASE_URL = `https://api.themoviedb.org/3/movie/`
export const TMDB_SEARCH_URL = `https://api.themoviedb.org/3/search/movie${TMDB_API_KEY}&language=en-US&query=`

export const APP_FOLDER_NAME = '/watcher'