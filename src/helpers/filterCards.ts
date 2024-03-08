import { Card } from "../redux/catalogSlice";
import { Filters } from "../redux/filterSlice";

export const filterCards = (
	cards: Card[],
	filters: Filters
): Card[] => {
	const { brand, price, mileageFrom, mileageTo } = filters;
	return cards
		.filter((card) =>
			brand !== ""
				? card.make.toLowerCase().includes(brand.toLowerCase())
				: card
		)
		.filter((card) => {
			const formattedPrice = Number(
				card.rentalPrice.slice(1, card.rentalPrice.length)
			);
			return price ? formattedPrice <= Number(price) : card;
		})
		.filter((card) =>
			Number(mileageFrom) ? card.mileage >= Number(mileageFrom) : card
		)
		.filter((card) =>
			Number(mileageTo) ? card.mileage <= Number(mileageTo) : card
		);
};
