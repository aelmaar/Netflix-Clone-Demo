import React,{useState,useEffect,useRef} from 'react'
import profil from './profil.png'
import netflix from './netflix.png'


function Navbar({onscroll}) {
	const [show,handleShow] = useState(false);
	const scrollFix = useRef();

	useEffect(() => {
		window.addEventListener("scroll",() => {
			const navHeight = scrollFix.current.getBoundingClientRect().height
			const containerHeight = window.pageYOffset;
			if(containerHeight > navHeight) handleShow(true)
			else handleShow(false)
		})
		return () => {
		 	window.removeEventListener("scroll")
		}
	},[])

	return (
		<nav ref={scrollFix} className={`navbar ${show && 'fixed'}`}>
			<img src={netflix} alt="netflix" />
			<img src={profil} alt="profil" />
		</nav>
	)
}

export default Navbar