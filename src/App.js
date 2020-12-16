import React from 'react'
import './App.css';
import Row from './Row'
import movies from './requests'

function App() {
  return (
    <div className='app'>
      <h1 Class='text-center'>Hey Clever Programmer!, Let's Bulid Netflex</h1>
      <Row title='Trending Now' fetchUrl={movies.fetchTrending}/>
      <Row title='Popular' fetchUrl={movies.fetchPopular}/>
      <Row title='Top Reated' fetchUrl={movies.fetchTopReated}/>
      <Row title='Up Coming' fetchUrl={movies.fetchUpComing}/>
    </div>
    
  );
}


export default App;

//export default App;
