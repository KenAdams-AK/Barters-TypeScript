import React, { FC } from "react";
import { CommetnsListPropsType } from "../components.data.type";
import SingleComment from "../SingleComment/SingleComment";
import NewComment from "../NewComment/NewComment";
import "./CommentsList.scss";
import { useAppSelector } from "../../redux/hooks";

const CommentsList: FC<CommetnsListPropsType> = ({ comments }) => {
	const isLogged = useAppSelector((state) => state.login.isSuccess);

	return (
		<div className="CommentsList">
			{isLogged && <NewComment />}
			{comments.map((comment) => (
				<SingleComment key={comment.id} comment={comment} />
			))}
		</div>
	);
};

export default CommentsList;
