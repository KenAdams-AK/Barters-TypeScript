import React, { FC, useEffect } from "react";
import { useBartersActions, useAppSelector } from "../../redux/hooks";
import { BarterType } from "../components.data.type";
import SingleBarter from "../SingleBarter/SingleBarter";
import Loader from "../Loader/Loader";
import "./BartersList.scss";

const BartersList: FC = () => {
	const { getBartersAsyncAction } = useBartersActions();
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
			{barters.map((barter: BarterType) => (
				<SingleBarter key={barter.id} barter={barter} />
			))}
		</div>
	);
};

export default BartersList;
