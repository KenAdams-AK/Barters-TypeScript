import React from "react";
import CommentsList from "../CommentsList/CommentsList";
import { SingleBarterPropType } from "../components.data.type";
import "./SingleBarter.scss";

const SingleBarter = ({ barter }: SingleBarterPropType) => {
	return (
		<div className="SingleBarter">
			<div className="SingleBarter__body">{barter.barter}</div>
			<div className="SingleBarter__footer">
				<div className="SingleBarter__teach">
					<p>I can teach:</p>
					<p>{barter.teach}</p>
				</div>
				<div className="SingleBarter__learn">
					<p>I want learn:</p>
					<p>{barter.learn}</p>
				</div>
				<div className="SingleBarter__optins">delete</div>
			</div>
			<CommentsList />
		</div>
	);
};

export default SingleBarter;
