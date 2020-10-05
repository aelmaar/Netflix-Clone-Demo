import React,{useState,useEffect} from 'react'
import axios from './axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const baseUrl = "https://image.tmdb.org/t/p/original"
const opts = {
      height: '500',
      width: '900',
      playerVars: {
        autoplay: 1,
      },
};

function Rows({title,fetchUrl,isLargeRow}) {
	const [movies,setMovies] = useState([])
	const [videoId,setVideoId] = useState("")

	useEffect(() => {
		const fetchData = async () => {
			await axios.get(fetchUrl)
			.then(response => setMovies(response.data.results))
		} 
		fetchData();
	},[fetchUrl])

	const handleClick = (movie) => {
		movieTrailer(movie?.name || "")
		.then(url => {
			const urlParams =new URLSearchParams(new URL(url).search)
			setVideoId(urlParams.get('v'))
		})
	}
	const handleHide = () => {
		setVideoId('')
	}

	return (
		<div className="rows">
			<h2>{title}</h2>
			<div className="row-posters">
				{movies.map(movie => (
					<img onClick={() => handleClick(movie)} src={baseUrl + (isLargeRow ? movie.poster_path:movie.backdrop_path)} alt={movie.name} />
				))}
			</div>
			{videoId &&
				<div onClick={() => handleHide()} className="video-display">
					<YouTube videoId={videoId} opts={opts}/>
				</div>
			}
			
		</div>
	)
}

export default Rows