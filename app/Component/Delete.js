const DeleteBotton=({ onDelete })=>{
	return(
		<>
			<div className="deleteDive">
				<img src="delete.png" className="Icon" alt="logo" onClick={onDelete}></img>
			</div>
		</>
	)
}
export default DeleteBotton;
