import { FC } from "react";
import "./SingleComment.scss";
import { SingleCommentPropsType } from "../components.data.type";
import moment from "moment";
import { userData } from "../../App";

const SingleComment: FC<SingleCommentPropsType> = ({ comment }) => {
	return (
		<div className="SingleComment">
			<div className="SingleComment__title">
				<div className="SingleComment__title-info">
					<p className="SingleComment__title-author">
						{comment.author.username}
					</p>
					<p className="SingleComment__title-date">
						{moment(comment.created).format("MMM Do YY")}
					</p>
				</div>
				{comment.author.id === userData.id && (
					<div className="SingleComment__title-delete">
						<i className="far fa-trash-alt"></i>
					</div>
				)}
			</div>
			<div className="SingleComment__body">{comment.comment}</div>
		</div>
	);
};

export default SingleComment;
