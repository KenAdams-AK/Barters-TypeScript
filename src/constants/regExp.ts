export const usernameValidRegex: RegExp =
	/^(?=[a-zA-Z._]{3,12}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

export const passwordValidRegex: RegExp =
	/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
