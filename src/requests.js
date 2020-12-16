const API_KEY = '96e2d48aa688b41bfb4a1ea227a982ef'
const BASE = 'https://api.themoviedb.org/3'
const imageBaseUrl = 'https://image.tmdb.org/t/p/original'
const TYPE = {
    trending: '/trending/all/week',
    topReated: '/movie/top_rated',
    popular: '/movie/popular',
    latest: '/movie/latest',
    upComing: '/movie/upcoming'
}
//const req = `/discover/movie?api_key=${API_KEY}`

const movieTypes = {
    fetchTrending: `${TYPE.trending}?api_key=${API_KEY}`,
    fetchTopReated: `${TYPE.topReated}?api_key=${API_KEY}`,
    fetchPopular: `${TYPE.popular}?api_key=${API_KEY}`,
    fetchUpComing: `${TYPE.upComing}?api_key=${API_KEY}`  
}
    


const fetchData = async function (){
    try {
        const firstFetch = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=96e2d48aa688b41bfb4a1ea227a982ef')
        const secondFetch = await firstFetch.json();
        const {results} = secondFetch
        let zz = results.map(item => [item.id, item.backdrop_path, item.original_title]);

        console.log(zz);
        console.log(results);
    } catch (error) {
        console.log(error)
    }   
}

export default movieTypes;