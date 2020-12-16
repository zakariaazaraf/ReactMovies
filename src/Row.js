import React, {useState, useEffect} from 'react'
import axios from './axios' // this is an alias of instance, not axios
const imageUrl = 'https://image.tmdb.org/t/p/w500'

function Row({title, fetchUrl}){
    const [movies, setMovies] = useState([])

    // a snippet of code which runs based on a specific conditions
    useEffect(() => {
        // if [] => run once when the row loads , and don't run again
        // FETCH DATA
        async function fetchData(){
            const firstFetch = await axios.get(fetchUrl);
            setMovies(firstFetch.data.results)
            return firstFetch.data;
        }
        fetchData();
        
    }, [fetchUrl])

    console.log(movies)
    return (
        <div className='-fluid'>
            <h2>{title}</h2>
            <div className='posts'>
                {movies.map(item => <img className='post' src={`${imageUrl}${item.backdrop_path}`} alt={item.title}></img>)}
            </div>
        </div>
    );
}


export default Row