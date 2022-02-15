export type InputType = null | string;
export type ErrorType = null | string;

export type UserType = {
	username: string;
	password: string;
	token?: string;
};

export type AuthorType = {
	id: string,
	username: string,
	created: string
}

export type CommentType = {
	authot: AuthorType,
	id: string,
	comment: string,
	created: string,
}

export type BarterType = {
	author: AuthorType
	id: string,
	barter: string,
	learn: string,
	teach: string,
	created: string,
	updated: string,
	comments: CommentType[],
}

export type SingleBarterPropType = {
	barter: BarterType
}