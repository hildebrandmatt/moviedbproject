

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
    processedMD.release_date = formatDate(mdAPI.results[arrayItem].release_date)
    processedMD.rating = mdAPI.results[arrayItem].vote_average
    processedMD.poster = mdAPI.results[arrayItem].poster_path
    processedMD.description = mdAPI.results[arrayItem].overview

    return processedMD
}

const formatDate = ( date ) => {

    const dateToFormat = date
    dateToFormat.split('')

    if(dateToFormat[8] != '0') {
        var day = dateToFormat[8] + dateToFormat[9]
    } else {
        var day = dateToFormat[9]
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
            month = month
    }

    var year = dateToFormat[0] + dateToFormat[1] + dateToFormat[2] + dateToFormat[3]

    const formattedDate = month + ' ' + day + ', ' + year

    return formattedDate
}