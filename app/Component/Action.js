const Action_row= ({handleLike,handleDisLike,vote})=>{
	
	return(
		<>
			<div className="likeDive">
				<img src="Like .png" className="like" alt="logo" onClick={handleLike}></img>
			</div>
			<div className="rattingDive">
				{vote}
			</div>
			<div className="dislikeDive">
				<img src="DisLike.png" className="Icon" alt="logo" onClick={handleDisLike}></img>
			</div>
		</>
	)
}

export default Action_row;
