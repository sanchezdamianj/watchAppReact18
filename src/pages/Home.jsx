import React from 'react'
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/Button';
import HeroSlide from '../components/HeroSlide';
import MovieList from '../components/MovieList';
import { category, movieType, tvType } from '../api/tmdbApi';
// import ListDiscover from '../components/ListDiscover';

const Home = () => {
  return (
   <>
    {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/movies">Movies</Link>
        <Link to="/tv">TvShows</Link>
      </nav> */}
      {/* <ListDiscover /> */}
      <HeroSlide />
      <div className="container">
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Trending Movies</h2>
              <Link to='/movies'>
              <OutlineButton className="small">View more!!</OutlineButton>
              </Link>
            </div>
             <MovieList category={category.movie} type={movieType.popular}/>
          </div>
          
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Top Rated Movies</h2>
              <Link to='/movies'>
              <OutlineButton className="small">View more!!</OutlineButton>
              </Link>
            </div>
             <MovieList category={category.movie} type={movieType.top_rated}/>
          </div>
       
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Trending Tv Series</h2>
              <Link to='/tv'>
              <OutlineButton className="small">View more!!</OutlineButton>
              </Link>
            </div>
             <MovieList category={category.tv} type={tvType.popular}/>
          </div>
       
          <div className="section mb-3">
            <div className="section__header mb-2">
              <h2>Top rated Tv Series</h2>
              <Link to='/tv'>
              <OutlineButton className="small">View more!!</OutlineButton>
              </Link>
            </div>
             <MovieList category={category.tv} type={tvType.top_rated}/>
          </div>
      </div>
  </>
  )
}
export default Home;