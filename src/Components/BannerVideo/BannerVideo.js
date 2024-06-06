import React from 'react'
import YouTube from 'react-youtube'
import './BannerVideo.css'

const BannerVideo = ({bannerVideo,closeVideo}) => {
    const opts = {
        height: '550',
        width: '100%',
        playerVars: {
          autoplay: 1,
        }}
  return (
    <div className='videoDiv'>
        <button className='close-btn' onClick={closeVideo}>
            <i class="fa-regular fa-circle-xmark"></i>
        </button>
        <YouTube opts={opts} videoId={bannerVideo.key}/>
    </div>
  )
}

export default BannerVideo