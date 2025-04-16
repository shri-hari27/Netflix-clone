import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const Titlecards = ({title,category}) => {
  const [apiData,setApiData] = useState([]);
  const cardsref = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGY2NjE0MTVlNTAwZjI5ZDhhNWU4OGQwNTY2Y2I0NyIsIm5iZiI6MTc0MTk3NDIyMy44NzEsInN1YiI6IjY3ZDQ2YWNmNTA2Y2M5MGQ2NDAyODk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.30SiotRTlaFURGpN5Iq8RB50zDE7q9-tr2qspYvamE4'
    }
  };
  
 

const handleWheel = (event)=>{
  event.preventDefault();
  cardsref.current.scrollLeft += event.deltaY;
}
useEffect(()=>{
  fetch (`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?
  language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  cardsref.current.addEventListener('wheel',handleWheel);
},[])
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on netflix"}</h2>
      <div className='card-list' ref={cardsref}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className='card' key={index}>
      <img 
  src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} 
  alt={card.original_title} 
  style={{ width: "340px", height: "auto", objectFit: "cover" }}
/>
            <p>{card.original_title}</p>
            
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards