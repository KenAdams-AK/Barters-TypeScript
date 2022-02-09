import React, { useState, useRef, useEffect } from "react";
import { useActions, useAppSelector } from "../../redux/hooks";
import { passwordValidRegex, usernameValidRegex } from "../../constants/regExp";
import "./Registration.scss";
import { Link } from "react-router-dom";
import { LOGIN } from "../../constants/routs";
import { ErrorType, InputType, UserType } from "../components.data.type";

export const Registration: React.FC = () => {
	const { registrationAsyncAction } = useActions();
	const { isLoading, isSuccess, errorMessage, userData } = useAppSelector(
		(state) => state.registration
	);

	const [newUser, setNewUser] = useState<UserType | null>(null);

	const [username, setUsername] = useState<string>(null!);
	const [password, setPassword] = useState<string>(null!);
	const [confirmPassword, setConfirmPassword] = useState<InputType>(null);

	const [usernameError, setUsernameError] = useState<ErrorType>(null);
	const [passwordError, setPasswordError] = useState<ErrorType>(null);
	const [passwordConfirmError, setPasswordConfirmError] =
		useState<ErrorType>(null);
	const [invalidForm, setInvalidForm] = useState<ErrorType>(null);

	const usernameInputRef = useRef<HTMLInputElement>(null);

	const user: UserType = {
		username,
		password,
	};

	console.log("RegistrationComponent>>>>>>");

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
		newUser && registrationAsyncAction(newUser);
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
				<Link to={LOGIN} className="Registration__link">
					Login here...
				</Link>
			</div>
		</section>
	);
};
