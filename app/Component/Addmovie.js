var AddMovie =()=>{
	return(
		<>	
			<div className="DivP">
				<p className="Add_New_Movie">Add A New Movie</p>
				<p className="the_list_above">To add a movie you have to fill a form. The added movie will appear in the list above </p>
			</div>
			<div className="addmovieForm">
				<p className="Hadding">Fill this form to add Movie</p> 
				<div className="InputDiv1">
					Name of Movie
					<input type="text" className="nameinput" name="lname"></input>
				</div>
				<div className="InputDiv2">
					Year of Release
					<input type="text" className="nameinput" name="lname"></input>
					<div className="polygonD">
						<img src="Polygon 3.png" className="polygon"></img>
					</div>
				</div>
				<div className="InputDiv3">
					Movie Duration
					<div className="nameinputd1">
						<input type="text" className="nameinput1" name="lname"></input>Hours
					</div>
					<div className="nameinputD2">
						
						<input type="text" className="nameinput2" name="lname"></input>
						<p className="min">Min</p>
					</div>
				</div>
				<p className="moviegenre">Movie Genre</p>
				<p className="selectApplicabale">Select all that is applicabale</p>
				<input type="checkbox" className="chekbox"></input>
 				<p className="pragraph">Drama</p><input type="checkbox" className="chekbox"></input>
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
 					<input type="text" className="DescriptionWritDiv">
 					</input>
 				</div>
 				
 				<div className="UmainDiv">
 				
 					<div className="UploadImgDiv">
 						<p className="ImgUp">Upload Image of Movie</p>
 					</div>
 					<div className="Upload">
 						<p className="uplod">Upload</p>
 					</div>
					<div className="addmovies">
						<p className="addmovies1">Add Movies</p>
					</div>
 						
 			
 				</div>
 				
			</div>
		</>
	)
}
export default AddMovie;
