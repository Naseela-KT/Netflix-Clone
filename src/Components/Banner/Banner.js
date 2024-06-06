import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'
import BannerVideo from '../BannerVideo/BannerVideo'


const Banner = () => {
  const [movie,setMovie]=useState()
  const [bannerVideo,setBannerVideo]=useState('')

  const closeVideo=()=>{
    setBannerVideo('')
  }
  

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
      let data=Math.floor(Math.random()*20)+1;
      setMovie(response.data.results[data])
    })
  },[])

  const handleBannerClick=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&languane=en-US`).then(response=>{
      if(response.data.results[0].length>0){
        setBannerVideo(response.data.results[0]);
      }
    })
  }

 const result=bannerVideo? <div>
        {bannerVideo && <><BannerVideo bannerVideo={bannerVideo} closeVideo={closeVideo}/></>}
        </div>:
        <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`,cursor:'pointer'}} onClick={()=>{handleBannerClick(movie.id)}}>
        <div className="content">
            <h1 className="title">{movie?movie.title:""}</h1>
            <h1 className="description">
           {movie?movie.overview:""}
            </h1>
        </div>
        <div className="banner_buttons">
                <button className="button play-btn" onClick={()=>{handleBannerClick(movie.id)}}><i class="fa-solid fa-play"></i>Play</button>
                <button className="button info-btn">My list</button>
          </div>
        <div className="fade_bottom"></div>
    </div>

    return result;
  
    
}

export default Banner