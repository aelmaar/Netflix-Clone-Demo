import React,{useState,useEffect} from 'react'
import axios from './axios'

const baseUrl = "https://image.tmdb.org/t/p/original"
const truncate = (str,n) => 
	str?.length > n? str.substr(0, n-1) + '....':str

function Banner({fetchUrl}) {
	const [movie,setMovies] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			await axios.get(fetchUrl)
			.then(response => setMovies(response.data.results[Math.floor(Math.random() * response.data.results.length)]))
		}
		fetchData();
	},[])

	return (
		<header className='header' style={{backgroundImage:`url(${baseUrl + movie.backdrop_path})`}}>
			<div className="header_left">
				<h1 className="title">
					{movie.original_name}
				</h1>
				<div>
					<button className="btn">Play</button>
					<button className="btn">My List</button>
				</div>
				<p className="description">
					{truncate(movie.overview,150)}
				</p>
			</div>
			
		</header>
	)
}

export default Banner