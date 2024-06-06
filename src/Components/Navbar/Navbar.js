import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../axios'
import "./Navbar.css"
import {trending} from '../../urls'

const Navbar = () => {
  const navigate=useNavigate()
  const [isSearch,setIsSearch]=useState(false);
  const [searchValue,setSearchValue]=useState('')
  const [searchMovie,setSearchMovie]=useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const regex = new RegExp(searchValue, 'i');
    const foundMovies = searchMovie.filter(movie => regex.test(movie.title));
    console.log(foundMovies);
    navigate(`/search?query=${searchValue}`, { state: { movies: foundMovies } });
  }

  useEffect(()=>{
    axios.get(trending).then(response=>{
      setSearchMovie(response.data.results)
    })
  })

  return (
    <div className='navbar'>
    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix-logo" />
    {isSearch?
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' onChange={(e)=>setSearchValue(e.target.value)}/>
      </form>
   
    :''}
    <button className='searchIcon' onClick={()=>{setIsSearch(!isSearch)}} ><i class="fa-solid fa-magnifying-glass"></i></button>
    <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default Navbar