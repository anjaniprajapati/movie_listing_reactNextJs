const DeleteBotton=({ onDelete })=>{
	return(
		<>
			<div className="deleteDive">
				<img src="Vector.png" className="Icon" alt="logo" onClick={onDelete}></img>
			</div>
		</>
	)
}
export default DeleteBotton;
