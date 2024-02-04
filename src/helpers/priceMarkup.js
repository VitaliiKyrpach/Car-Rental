export const createPrice = (data) => {
	const dataPrice = data.map(({ rentalPrice }) =>
		Number(rentalPrice.replace(/[^0-9]/g, ""))
	);
	const maxPrice = Math.max(...dataPrice);
	let priceArr = [];
	for (let i = 10; i <= maxPrice; i += 10) {
		priceArr.push(i);
	}
	return priceArr;
};
