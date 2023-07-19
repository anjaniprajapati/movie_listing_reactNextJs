var Add_New_Movie=({onClick})=>{
	
	return(
		<>
			<div className="addnewmovie_mainDiv">
 				
				<div className="addnewmovieDiv">
					<p className="addnewmo">Add A New Movie</p>
				</div>
				<div className="pragrphDivp">
					<p className="aboutpragraph">To add a movie you have to fill a form. The added movie will appear in the list abve</p>
				</div>
				<div className="Newmovies" onClick={onClick}>
					<p className="newmovies"> New Movies</p>
					<div className="logoadd">
						<img src="Frame 96.png"></img>
					</div>
				</div>
 						
 			
			</div>
			
		</>
	)
}
export default Add_New_Movie;
