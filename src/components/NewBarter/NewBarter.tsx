import React from "react";
import "./NewBarter.scss";

const NewBarter = () => {
	return (
		<div className="NewBarter">
			<form className="NewBarter__form">
				<textarea
					className="NewBarter__form-textarea"
					placeholder="New Barter description..."
					maxLength={300}
				/>
				<div className="NewBarter__form-inputs">
					<label>
						I can teach:
						<input type="text" />
					</label>
					<label>
						I want learn:
						<input type="text" />
					</label>
				</div>
				<button className="NewBarter__form-button">Submit</button>
			</form>
		</div>
	);
};

export default NewBarter;
