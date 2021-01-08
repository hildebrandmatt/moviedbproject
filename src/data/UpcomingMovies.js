import { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../globals/variables';

const UpcomingMovies = () => {

    const fetchUpcomingMovies = async () => {
        const res = await fetch(`${TMDB_BASE_URL}upcoming?api_key={TMDB_API_KEY}&language=en-US&page=1$`)
        let data = await res.json()
        return data
    }
}

export default fetchUpcomingMovies