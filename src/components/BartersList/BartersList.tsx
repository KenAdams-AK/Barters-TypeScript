import React, { useEffect } from "react";
import { JsonObjectExpression } from "typescript";
import { useBartersActions, useAppSelector } from "../../redux/hooks";
import { BarterType } from "../components.data.type";
import SingleBarter from "../SingleBarter/SingleBarter";
import "./BartersList.scss";

const BartersList = () => {
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
			{barters.items?.map((barter: BarterType) => (
				<SingleBarter key={barter.id} barter={barter} />
			))}
		</div>
	);
};

export default BartersList;
