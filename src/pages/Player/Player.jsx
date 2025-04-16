import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGY2NjE0MTVlNTAwZjI5ZDhhNWU4OGQwNTY2Y2I0NyIsIm5iZiI6MTc0MTk3NDIyMy44NzEsInN1YiI6IjY3ZDQ2YWNmNTA2Y2M5MGQ2NDAyODk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.30SiotRTlaFURGpN5Iq8RB50zDE7q9-tr2qspYvamE4'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results?.[0] || {}))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />
      <iframe 
        width='90%' 
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' 
        frameBorder='0' 
        allowFullScreen
      ></iframe>
      <div className='player-info'>
        <p>{apiData.published_at?.slice(0,10) || "No date available"}</p>
        <p>{apiData.name || "No name available"}</p>
        <p>{apiData.type || "No type available"}</p>
      </div>
    </div>
  );
};

export default Player;
