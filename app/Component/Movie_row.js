import Action_row from './Action'
import DeleteBotton from './Delete'
const Movie_Row = ({ data, onDelete ,handleLike,handleDisLike,vote})=>{
	return(
		<>
			<div className="movieData_mainDiv">
				<div className="movieRow">
					<div className="MovieImgDiv">
					    <img src={data.imge} className="mImag"/>
					</div>
					<div className="AboutMovieDiv">
						<h1 className="heading">{data.name}</h1>
						<p className="yeartime">{data.year } | {data.genre }</p>
						<div className="disDiv">
						    <p className="DiscHead">Discription</p>
						    <p className="aboutdiscription">{data.Description}</p>
						</div>
						<Action_row handleLike={handleLike} handleDisLike={handleDisLike} vote={vote} />
						<DeleteBotton onDelete={onDelete}/>
					</div>
				</div>				
			</div>

		</>
	)
}
export default Movie_Row;



