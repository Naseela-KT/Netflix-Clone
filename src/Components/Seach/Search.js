import React from 'react'
import Navbar from './../Navbar/Navbar';
import {imageUrl} from '../../constants/constants'
import { useLocation } from 'react-router-dom';
import './Search.css'

const Search = () => {
  const location = useLocation();
  const movies = location.state?.movies || [];

  return (
    <> <Navbar/>
    <div className='searchDiv'>
    {movies?<p style={{color:'#fff'}}>Found {movies.length} Item...</p>:<p>Did not find any matches!</p>}
    <br/>
    {movies?movies.map((obj)=>
          <img  className='smallPoster' src={`${imageUrl+obj.backdrop_path}`} alt="" height='200' width='200'/>
        ):''}
    </div>
   
    </>
  )
}

export default Search