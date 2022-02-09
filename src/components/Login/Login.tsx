import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { passwordValidRegex, usernameValidRegex } from "../../constants/regExp";
import { HOME } from "../../constants/routs";
import { useActions, useAppSelector } from "../../redux/hooks";
import { ErrorType, InputType, UserType } from "../components.data.type";
import "./Login.scss";

export const Login: React.FC = () => {
	const { loginAsyncAction } = useActions();
	const { isLoading, isSuccess, userData, errorMessage } = useAppSelector(
		(state) => state.login
	);

	const usernameInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const formRef = useRef<HTMLFormElement>(null);

	const [usernameInputError, setUsernameInputError] = useState<ErrorType>(null);
	const [passwordInputError, setPasswordInputError] = useState<ErrorType>(null);
	const [invalidFormError, setInvalidFormError] = useState<ErrorType>(null);

	console.log("LoginComponent>>>>>>");

	const inputValidation = (username: string, password: string): boolean => {
		if (!username || !password) {
			setInvalidFormError("Invalid form. Fill all fields, please.");
			return false;
		} else if (!usernameValidRegex.test(String(username))) {
			setUsernameInputError("Incorrect username");
			return false;
		} else if (!passwordValidRegex.test(String(password))) {
			setPasswordInputError("Incorrect password");
			return false;
		} else {
			return true;
		}
	};

	const resetInputsError = () => {
		if (!invalidFormError && !usernameInputError && !passwordInputError) return;
		setInvalidFormError(null);
		setUsernameInputError(null);
		setPasswordInputError(null);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const user: UserType = {
			username: usernameInputRef.current?.value!,
			password: passwordInputRef.current?.value!,
		};

		if (!inputValidation(user.username, user.password)) return;
		loginAsyncAction(user);
	};

	useEffect(() => {
		if (isSuccess) {
			formRef.current?.reset();
			localStorage.setItem("userData", JSON.stringify(userData));
			localStorage.setItem("token", userData.token!);
		}
	}, [isSuccess]);

	return (
		<section className="Login">
			<div className="Login__container">
				<h3 className="Login__title">Login</h3>
				{isLoading && <div className="Login__loading">Loading...</div>}
				{errorMessage && <div className="Login__error">{errorMessage}</div>}
				{invalidFormError && (
					<div className="Login__error">{invalidFormError}</div>
				)}
				{isSuccess ? (
					<div className="Login__success">
						<h2>Logged successfully!</h2>
					</div>
				) : (
					<form className="Login__form" ref={formRef} onSubmit={handleSubmit}>
						<div className="Login__form-container">
							<input
								type="text"
								className="Login__form-input"
								placeholder="Username"
								ref={usernameInputRef}
								onChange={() => resetInputsError()}
							/>
							{usernameInputError && (
								<div className="Login__error">{usernameInputError}</div>
							)}
							<input
								type="password"
								className="Login__form-input"
								placeholder="Password"
								ref={passwordInputRef}
								onChange={() => resetInputsError()}
							/>
							{passwordInputError && (
								<div className="Login__error">{passwordInputError}</div>
							)}
							<button className="Login__button">Submit</button>
						</div>
					</form>
				)}
				<Link to={HOME} className="Login__link">
					To main page...
				</Link>
			</div>
		</section>
	);
};
