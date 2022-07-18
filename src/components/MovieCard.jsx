import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";
import { category } from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";
import Button from "./Button";
import {BiPlay} from 'react-icons/bi';

const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button className="btn-play" >
          <BiPlay style={{'width': '5em', 'height': '5em'}}/>
        </Button>
      </div>
      <h4>{item.title || item.name}</h4>
    </Link>
  );
};
export default MovieCard;
