'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import Head from './Component/Header'
import Movie_Row from './Component/Movie_row'
import AddMovie from './Component/Addmovie'
import Add_New_Movie from './Component/Add_new_movie'
import MovieText from './Component/Movie_Text'
import Foot from './Component/Footer'
import styles from './page.module.css'
import DummyValue from './Component/Dummy_Value'



export default function Home() {
	const [showForm, setShowForm] = useState(false);
	const [movies, setMovies] = useState(DummyValue)
	
	const handleButtonClick = () => {
    setShowForm(!showForm);
	};
	
	const handleDeleteMovie = (id) => {
    	const updatedMovies = movies.filter(movie => movie.id !== id);
    	setMovies(updatedMovies);
  	};

	const [vote, setVote] = useState(0);
	const handleLike =(id)=>{
		const Vote={...vote}
		if (Vote[id]===undefined){
			Vote[id]=1
		}else{
			Vote[id]+=1
		}
		setVote(Vote)
	};
	const handleDisLike=(id)=>{
		const Vote={...vote}
		if (Vote[id]===undefined){
			Vote[id]=-1
		}else{
			Vote[id]-=1
		}
		setVote(Vote)
	}
	
	
  	
  
  	return (
  		<>
			<Head/>
			<div className="Div_wtch">
				<p className="Die_wtch_p">Watch</p>
			</div>
			
			{movies.map((data) => (
				<Movie_Row 
					key={data.id} 
					data={data} 
					handleLike={() =>handleLike(data.id)} 
					handleDisLike={() =>handleDisLike(data.id)} 
					vote={vote[data.id]}
					onDelete={() => handleDeleteMovie(data.id)} 
				/>
	  		))}
	  		<MovieText/>
			{showForm ? <AddMovie onDeleteButton={handleButtonClick} /> : <Add_New_Movie onClick={handleButtonClick} />}
			
			<Foot />
  		</>
  	);
}

