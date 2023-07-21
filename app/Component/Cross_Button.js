const Deleteform =({onDelete})=>{

	const handleDeleteClick = () => {
    onDelete();
  	};
	return(
		<div className="cross" onClick={handleDeleteClick}>
			<img src="Frame 96.png"></img>
		</div>
	)

}
export default Deleteform;
