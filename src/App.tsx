import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { HOME, LOGIN, REGISTRATION } from "./constants/routs";
import { Login } from "./components/Login/Login";
import { Registration } from "./components/Registration/Registration";
import BartersList from "./components/BartersList/BartersList";
import { UserType } from "./components/components.data.type";
import { useAuthActions } from "./redux/hooks";

export const userData: UserType = JSON.parse(localStorage.getItem("userData")!);

function App() {
	const { loginSuccessAction } = useAuthActions();

	console.log("AppComponent>>>>>>");
	console.log(userData);

	userData && loginSuccessAction(userData);

	return (
		<div className="App">
			<Header />
			<div className="App__container">
				<Routes>
					<Route path={HOME} element={<BartersList />} />
					<Route path={LOGIN} element={<Login />} />
					<Route path={REGISTRATION} element={<Registration />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
