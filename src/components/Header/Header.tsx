import React from "react";
import { Link } from "react-router-dom";
import * as ROUTS from "../../constants/routs";
import { useAuthActions, useAppSelector } from "../../redux/hooks";
import "./Header.scss";

export const Header: React.FC = () => {
	const { logoutAction } = useAuthActions();

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
							{isLogged ? (
								<li role="button" onClick={handleLogout}>
									<Link to={ROUTS.HOME}>Logout</Link>
								</li>
							) : (
								<li>
									<Link to={ROUTS.LOGIN}>Login</Link>
								</li>
							)}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
