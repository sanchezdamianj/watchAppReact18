import React, { useState, useEffect } from "react";
import tmdbApi, { category } from "../api/tmdbApi";
// import apiConfig from "../api/apiConfig";
import PropTypes from 'prop-types';
import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard from "./MovieCard";

const MovieList = (props) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let res = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            res = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            res = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        res = await tmdbApi.similar(props.category, props.id);
      }
      setItems(res.results);
    };
    getList();
  }, [items,props.category, props.id,props.type]);

  return (

    <div className="movie-list">
      <Swiper 
        grabCursor={true} 
        spaceBetween={10} 
        slidesPerView={"auto"}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            {/* <img src={apiConfig.w500Image(item.poster_path)} alt='' /> */}
            <MovieCard item={item} category={props.category}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
