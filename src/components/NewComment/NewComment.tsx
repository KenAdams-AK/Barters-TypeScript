import React from "react";
import "./NewComment.scss";

const NewComment = () => {
	return (
		<div className="NewComment">
			<form className="NewComment__form">
				<textarea
					className="NewComment__form-textarea"
					placeholder="Comment..."
					maxLength={100}
				/>
				<input type="submit" className="NewComment__form-button" />
			</form>
		</div>
	);
};

export default NewComment;
