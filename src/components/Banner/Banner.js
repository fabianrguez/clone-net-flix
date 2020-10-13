import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import requests from '../../requests';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginal);
      setMovie(response.data.results[random(response.data.results.length)]);
      return response;
    }
    fetchData();
  }, []);

  function random(limit) {
    return Math.floor(Math.random() * limit - 1);
  }

  function truncate(string, limit) {
    return string?.length > limit ? string.substr(0, limit - 1) + '...' : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${process.env.REACT_APP_BASE_URL_IMAGES}${movie?.backdrop_path})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button banner__buttonPlay">Play</button>
          <button className="banner__button">More information</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;