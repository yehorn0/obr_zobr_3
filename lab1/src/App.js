import React, { useState } from "react";

function App() {
	const [file, setFile] = useState();

	const handleChange = (e) => {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}
	return (
		<div className="App text-center">
			<h2>Add Image:</h2>
			<input type="file" onChange={handleChange} className="form-group"/>
			<img src={file}/>
		</div>
	);
}

export default App;
