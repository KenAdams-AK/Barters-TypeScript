import React, { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { passwordValidRegex, usernameValidRegex } from "../../constants/regExp";
import { registrationAsyncAction } from "../../redux/registration/registrationAsyncActions";
import "./Registration.scss";

type Input = null | string;
type Error = null | string;

type User = {
	username: Input;
	password: Input;
};

export const Registration: React.FC = () => {
	const dispatch = useAppDispatch();
	const { isLoading, isSuccess, errorMessage, userData } = useAppSelector(
		(state) => state.registration
	);

	const [newUser, setNewUser] = useState<User | null>(null);

	const [username, setUsername] = useState<Input>(null);
	const [password, setPassword] = useState<Input>(null);
	const [confirmPassword, setConfirmPassword] = useState<Error>(null);

	const [usernameError, setUsernameError] = useState<Error>(null);
	const [passwordError, setPasswordError] = useState<Error>(null);
	const [passwordConfirmError, setPasswordConfirmError] = useState<Error>(null);
	const [invalidForm, setInvalidForm] = useState<Error>(null);

	const usernameInputRef = useRef<HTMLInputElement>(null);

	const user = {
		username,
		password,
	};

	console.log(userData);

	useEffect(() => {
		usernameInputRef.current?.focus();
	}, []);

	const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
		if (!usernameValidRegex.test(String(e.target.value))) {
			setUsernameError(
				"Username requires 3 to 12 characters, only latin letters can be used."
			);
		} else {
			setUsernameError(null);
		}
	};

	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		if (!passwordValidRegex.test(String(e.target.value))) {
			setPasswordError(
				"Password requires 8 to 20 characters, at least one letter and one number."
			);
		} else {
			setPasswordError(null);
		}
	};

	const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(e.target.value);
		if (password !== e.target.value) {
			setPasswordConfirmError("Passwords don't mutch. Please, double check.");
		} else {
			setPasswordConfirmError(null);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (
			!username ||
			!password ||
			!confirmPassword ||
			usernameError ||
			passwordError ||
			passwordConfirmError
		) {
			setInvalidForm("Invalid input. Please, fill all the fields properly.");
		} else {
			setNewUser(user);
			setUsernameError(null);
			setPasswordError(null);
			setPasswordConfirmError(null);
		}
	};

	useEffect(() => {
		newUser && dispatch(registrationAsyncAction(newUser));
	}, [newUser]);

	return (
		<section className="Registration">
			<div className="Registration__container">
				<h3 className="Registration__title">Registration</h3>
				{isLoading && <div className="Registration__loading">Loading...</div>}
				{errorMessage && (
					<div className="Registration__error">{errorMessage}</div>
				)}
				{invalidForm && (
					<div className="Registration__error">{invalidForm}</div>
				)}
				{isSuccess ? (
					<div className="Registration__success">
						<h2>Registered successfully!</h2>
					</div>
				) : (
					<form className="Registration__form" onSubmit={handleSubmit}>
						<div className="Registration__form-container">
							<input
								type="text"
								name="username"
								className="Registration__form-input"
								placeholder="Username"
								ref={usernameInputRef}
								onChange={handleUsername}
							/>
							{usernameError && (
								<div className="Registration__error">{usernameError}</div>
							)}
							<input
								type="password"
								name="password"
								className="Registration__form-input"
								placeholder="Password"
								onChange={handlePassword}
							/>
							{passwordError && (
								<div className="Registration__error">{passwordError}</div>
							)}
							<input
								type="password"
								name="confimPassword"
								className="Registration__form-input"
								placeholder="Confirm password"
								onChange={handleConfirmPassword}
							/>
							{passwordConfirmError && (
								<div className="Registration__error">
									{passwordConfirmError}
								</div>
							)}
							<button className="Registration__button">Submit</button>
						</div>
					</form>
				)}
			</div>
		</section>
	);
};
