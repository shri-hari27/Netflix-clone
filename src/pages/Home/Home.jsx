import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import extrac from '../../assets/extrac.jpg'
import extractitle from '../../assets/extractitle.jpeg'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/TitleCards/Titlecards'
import Footer from '../../components/Footer/Footer'

const  Home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <div className="hero">
      <img src={extrac} alt=""  className='banner-img'/>
      <div className='hero-caption'>
        <img src={extractitle} alt="" className='caption-img' />
        <p>
        Back from the brink of death, commando Tyler Rake embarks on a dangerous mission to save a ruthless gangster's imprisoned family.
        </p>
        <div className='hero-btns'>
        <button className='btn'> <img src={play_icon} alt="" />Play</button>
        <button className='btn dark-btn'> <img src={info_icon} alt="" />More Info</button>
        
        </div>
        <Titlecards/>

      </div>
      
    </div>
    <div className="more-cards">
    <Titlecards title={"BlockBuster Movies"} category={"top_rated"}/>
    <Titlecards title={"Only on Netflix"}category={"popular"}/>
    <Titlecards title={"Upcoming"}category={"upcoming"}/>
    <Titlecards title={"Top picks for you"}category={"now_playing"}/>
   
    </div>
    <Footer/>
    </div>
  )
}

export default Home