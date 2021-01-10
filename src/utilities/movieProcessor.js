

export const processMovieArray = (mdAPI) => {

    const processedMDArray = {}
    var i;
    for ( i=0; i < mdAPI.results.length; i++ ) {
        processedMDArray[i] = processMovie(mdAPI, i)
    }
    return processedMDArray
}

export const processMovie = (mdAPI, arrayItem) => {

    const processedMD = {};

    processedMD.title = mdAPI.results[arrayItem].title
    processedMD.release_date = mdAPI.results[arrayItem].release_date
    processedMD.rating = mdAPI.results[arrayItem].vote_average
    processedMD.poster = mdAPI.results[arrayItem].poster_path
    processedMD.description = mdAPI.results[arrayItem].overview

    return processedMD
}

const formatDate = ( date ) => {
    

    return formattedDate
}