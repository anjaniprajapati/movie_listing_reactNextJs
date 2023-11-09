'use client'
import React, { useState } from 'react';
const AddMovie = ({onDeleteButton}) => {

	const [movies, setMovies] = useState([]);
	const [formData, setFormData] = useState({
		title: '',
		director: '',
		releaseYear: '',
		hours: '',
		minutes: '',
		genre: {
			drama: false,
			biography: false,
			romance: false,
			comedy: false,
			adventure: false,
			family: false,
			documentary: false,
		},
		description: '',
	})

	const handleChange = (e) => {
		const { name, value, type, check } = e.target;
		if (type === 'checkbox') {
			setFormData({
				...formData,
				gener: {
					...formData.genre,
					[name]: check,
				}
			})
		}
		else {
			setFormData({
				gener: {
					...formData,
					[name]: value,
				}
			})
		}

	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newMovie = { ...formData };
		setMovies([...movies, newMovie]);
		setFormData({
			title: '',
			director: '',
			releaseYear: '',
			hours: '',
			minutes: '',
			genre: {
				drama: false,
				biography: false,
				romance: false,
				comedy: false,
				adventure: false,
				family: false,
				documentary: false,
			},
			description: '',
		})
	}

	return (
		<>

			<div className="addmovieForm">
				<div className="Hadding_1">
					<p className="Hadding">Fill this form to add Movie</p>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="cross" onClick={onDeleteButton}>
						<img src="Frame 96.png"></img>
					</div>
					<div className="InputDiv1">
						Name of Movie
						<input type="text"
							className="nameinput"
							name="title"
							value={formData.title}
							onChange={handleChange}
							placeholder="Title"
							required
						>
						</input>
					</div>
					<div className="InputDiv2">
						Year of Release
						{/* <select className="nameinput" name="year">
							<option value="">Select Year</option>
							<option value="">1900</option>
							<option value="">1800</option>
							<option value="">2005</option>
							<option value="">2016</option>
							<option value="">2022</option>
						</select> */}
						<input type="text"
							className="nameinput"
							name="releaseYear"
							value={formData.releaseYear}
							onChange={handleChange}
							placeholder="Release Year"

							required
						>
						</input>
						<div className="polygonD">
							<img src="Polygon 3.png" className="polygon"></img>
						</div>
					</div>
					<div className="InputDiv3">
						Movie Duration
						<div className="nameinputd1">
							<input type="number"
								className="nameinput1"
								name="hours"
								value={formData.hours}
								onChange={handleChange}
								placeholder="Hours"
								required

							>
							</input>Hours
						</div>
						<div className="nameinputD2">

							<input type="number"
								className="nameinput2"
								name="minutes"
								value={formData.minutes}
								onChange={handleChange}
								placeholder="Mintuse"
								required
							>
							</input>
							<p className="min">Min</p>
						</div>
					</div>
					<p className="moviegenre">Movie Genre</p>
					<p className="selectApplicabale">Select all that is applicabale</p>
					<input type="checkbox"
						className="chekbox"
						name="genre"
						check={formData.genre}
						onChange={handleChange}
					>
					</input>
					<p className="pragraph">Drama</p>
					<input type="checkbox" className="chekbox"></input>
					<p className="pragraph">Biography</p>
					<input type="checkbox" className="chekbox"></input>
					<p className="pragraph">Romance</p>
					<input type="checkbox" className="chekbox"></input>
					<p className="pragraph">Comedy</p>
					<input type="checkbox" className="chekbox"></input>
					<p className="pragraph">Adventure</p>
					<input type="checkbox" className="chekbox"></input>
					<p className="pragraph">Family</p>
					<input type="checkbox" className="chekbox"></input>
					<p className="pragraph">Documentary</p>

					<div className="mainDiv">

						<div className="DescripDiv">
							<p className="DescriP">Description</p>
						</div>
						<textarea type="text"
							className="DescriptionWritDiv"
							name="description"
							value={formData.description}
							onChange={handleChange}
							placeholder="Discription"
							required
						>
						</textarea>
					</div>

					<div className="UmainDiv">

						<div className="UploadImgDiv">
							<p className="ImgUp">Upload Image of Movie</p>
						</div>
						<div className="Upload">
							<p className="uplod">Upload</p>
						</div>
						<button type="submit" className="addmovies">
							<p className="addmovies1">Add Movies</p>
						</button>


					</div>
				</form>
			</div>
		</>
	)
}
export default AddMovie;
