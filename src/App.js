import React,{useState,useEffect,useRef} from 'react';
import requests from './requests'
import Navbar from './Navbar'
import Banner from './Banner'
import Rows from './Rows'
import './App.css';

function App() {
  

  return (
    <div className="app">
      <div className="app__navbar">
        <Navbar />
      </div>
      <div className="app__banner">
        <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      </div>
      <div className="app__row">
        <Rows title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Rows title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      </div>
      
    </div>
  );
}

export default App;