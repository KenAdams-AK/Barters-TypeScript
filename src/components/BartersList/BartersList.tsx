import React, { FC, useEffect } from "react";
import { useBartersActions, useAppSelector } from "../../redux/hooks";
import { BarterType } from "../components.data.type";
import SingleBarter from "../SingleBarter/SingleBarter";
import Loader from "../Loader/Loader";
import "./BartersList.scss";
import NewBarter from "../NewBarter/NewBarter";

const BartersList: FC = () => {
	const { getBartersAsyncAction } = useBartersActions();

	const isLogged = useAppSelector((state) => state.login.isSuccess);
	const { isLoading, barters, getBartersError } = useAppSelector(
		(state) => state.barters
	);

	console.log(barters);

	useEffect(() => {
		getBartersAsyncAction();
	}, []);

	return (
		<div className="BartersList">
			{isLoading && <Loader />}
			{getBartersError && (
				<div className="BartersList__error">{getBartersError}</div>
			)}
			{isLogged && <NewBarter />}
			{barters.map((barter: BarterType) => (
				<SingleBarter key={barter.id} barter={barter} />
			))}
		</div>
	);
};

export default BartersList;
