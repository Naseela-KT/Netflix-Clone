import React, { useEffect,useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'

const RowPost = (props) => {
  const [movies,setMovies]=useState([])
  const [videoUrl,setVideoUrl]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      setMovies(response.data.results)
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }}

    const handleMovieClick=(id)=>{
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&languane=en-US`).then(response=>{
        setVideoUrl(response.data.results[0])
      })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
        {movies.map((obj)=>
          <img onClick={()=>handleMovieClick(obj.id)} className={`${props.isSmall?'smallPoster':'poster'}`} src={`${imageUrl+obj.backdrop_path}`} alt="" />
        )}
            
        </div>
          {videoUrl &&<><button className='smallBannerClose' onClick={()=>{setVideoUrl('')}}>
            <i class="fa-regular fa-circle-xmark"></i>
        </button> <YouTube opts={opts} videoId={videoUrl.key}/></>}
    </div>
  )
}

export default RowPost