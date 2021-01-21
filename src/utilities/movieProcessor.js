

export const processMovieArray = (mdAPI, length) => {

    const processedMDArray = []
    var i;
    for ( i=0; i < length; i++ ) {
        processedMDArray[i] = processMovie(mdAPI, i)
    }
    return processedMDArray
}

export const processMovie = (mdAPI, arrayItem) => {

    const processedMD = [];

    if(mdAPI.results[arrayItem].title) {
        processedMD.title = mdAPI.results[arrayItem].title
    } else { processedMD.title = "Unknown"}
    if(mdAPI.results[arrayItem].release_date) {
        processedMD.release_date = formatDate(mdAPI.results[arrayItem].release_date)
    } else { processedMD.release_date = "Unknown Release Date" }
    if(mdAPI.results[arrayItem].vote_average) {
        processedMD.rating = mdAPI.results[arrayItem].vote_average        
    } else { processedMD.rating = 0 }
    if(mdAPI.results[arrayItem].poster_path) {
        processedMD.poster = mdAPI.results[arrayItem].poster_path
    } else { processedMD.poster = null }
    if(mdAPI.results[arrayItem].overview) {
        processedMD.description = mdAPI.results[arrayItem].overview
    } else { processedMD.description = "It's a movie, that much is known." }
    if(mdAPI.results[arrayItem].id) {
        processedMD.id = mdAPI.results[arrayItem].id
    } else { processedMD.id = 572154 }

    return processedMD
}

export const processSingleMovie = (mdAPI) => {

    const processedMD = [];

    if(mdAPI.title) {
        processedMD.title = mdAPI.title
    } else { processedMD.title = "Unknown"}
    if(mdAPI.release_date) {
        processedMD.release_date = formatDate(mdAPI.release_date)
    } else { processedMD.release_date = "Unknown Release Date" }
    if(mdAPI.vote_average) {
        processedMD.rating = mdAPI.vote_average        
    } else { processedMD.rating = 0 }
    if(mdAPI.poster_path) {
        processedMD.poster = mdAPI.poster_path
    } else { processedMD.poster = null }
    if(mdAPI.overview) {
        processedMD.description = mdAPI.overview
    } else { processedMD.description = "It's a movie, that much is known." }
    if(mdAPI.id) {
        processedMD.id = mdAPI.id
    } else { processedMD.id = 572154 }

    return processedMD
}

const formatDate = ( date ) => {

    const dateToFormat = date
    dateToFormat.split('')
    var day = "00"

    if(dateToFormat[8] !== '0') {
        day = dateToFormat[8] + dateToFormat[9]
    } else {
        day = dateToFormat[9]
    }

    var month = dateToFormat[5] + dateToFormat[6]
    switch(month) {
        case '01':
            month = "January"
            break
        case '02':
            month = "February"
            break
        case '03':
            month = "March"
            break
        case '04':
            month = "April"
            break
        case '05':
            month = "May"
            break
        case '06':
            month = "June"
            break
        case '07':
            month = "July"
            break
        case '08':
            month = "August"
            break
        case '09':
            month = "September"
            break
        case '10':
            month = "October"
            break
        case '11':
            month = "November"
            break
        case '12':
            month = "December"
            break
        default:
    }

    var year = dateToFormat[0] + dateToFormat[1] + dateToFormat[2] + dateToFormat[3]

    const formattedDate = month + ' ' + day + ', ' + year

    return formattedDate
}