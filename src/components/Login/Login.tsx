import React from "react";
import "./Login.scss";

export const Login: React.FC = () => {
	return (
		<section className="Login">
			<div className="Login__container">
				<h3 className="Login__title">Login</h3>
				<form className="Login__form">
					<div className="Login__form-container">
						<input
							type="text"
							className="Login__form-input"
							placeholder="Username"
						/>
						<input
							type="password"
							className="Login__form-input"
							placeholder="Password"
						/>
						<button className="Login__button">Submit</button>
					</div>
				</form>
			</div>
		</section>
	);
};
