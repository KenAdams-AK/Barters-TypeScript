import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { LOGIN, REGISTRATION } from "./constants/routs";
import { Login } from "./components/Login/Login";
import { Registration } from "./components/Registration/Registration";

function App() {
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
