import React, {useState, useEffect} from 'react'
import axios from './axios' // this is an alias of instance, not axios
const imageUrl = 'https://image.tmdb.org/t/p/original'

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
        <div className='container-fluid'>
            <h2>{title}</h2>
            <div className='row justify-content-center'>
                {movies.map(item => <div className='col-12 col-sm-4 col-md-3 col-lg-2 mx-1 my-1'><img className='post' src={`${imageUrl}${item.poster_path}`} alt={item.title}></img></div>)}
            </div>
        </div>
    );
}


export default Row