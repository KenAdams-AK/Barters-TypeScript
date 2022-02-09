import React from "react";
import { Link } from "react-router-dom";
import * as ROUTS from "../../constants/routs";
import { useActions, useAppSelector } from "../../redux/hooks";
import "./Header.scss";

export const Header: React.FC = () => {
	const { logoutAction } = useActions();

	const username = useAppSelector((state) => state.login.userData.username);
	const isLogged = useAppSelector((state) => state.login.isSuccess);

	console.log("HeaderComponent>>>>>>");

	const handleLogout = () => {
		isLogged &&
			window.confirm("Are you sure, you wanna logout?") &&
			logoutAction();
	};

	return (
		<header className="Header">
			<div className="Header__container">
				<h1 className="Header__logo">
					<Link to={ROUTS.HOME}>Barter</Link>
				</h1>
				<div className="Header__greeting">
					<h2>Hello, {username || "Guest"}!</h2>
				</div>
				<div className="Header__nav">
					<nav>
						<ul>
							<li>
								<Link to={ROUTS.REGISTRATION}>Registration</Link>
							</li>
							<li>
								<Link to={ROUTS.LOGIN}>Login</Link>
							</li>
							<Link to={ROUTS.HOME}>
								<li role="button" onClick={handleLogout}>
									Logout
								</li>
							</Link>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
