import React, { FC } from "react";
import { CommetnsListPropsType } from "../components.data.type";
import SingleComment from "../SingleComment/SingleComment";
import "./CommentsList.scss";

const CommentsList: FC<CommetnsListPropsType> = ({ comments }) => {
	return (
		<div className="CommentsList">
			{comments.map((comment) => (
				<SingleComment key={comment.id} comment={comment} />
			))}
		</div>
	);
};

export default CommentsList;
