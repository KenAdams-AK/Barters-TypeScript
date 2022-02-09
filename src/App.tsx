import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { LOGIN, REGISTRATION } from "./constants/routs";
import { Login } from "./components/Login/Login";
import { Registration } from "./components/Registration/Registration";
import { UserType } from "./components/components.data.type";
import { useActions } from "./redux/hooks";

function App() {
	const { loginSuccessAction } = useActions();

	const userData: UserType = JSON.parse(localStorage.getItem("userData")!);

	console.log("AppComponent>>>>>>");
	console.log(userData);

	userData && loginSuccessAction(userData);

	return (
		<div className="App">
			<Header />
			<div className="App__container">
				<Routes>
					<Route path={LOGIN} element={<Login />} />
					<Route path={REGISTRATION} element={<Registration />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
