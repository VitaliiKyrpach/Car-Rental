import { useMemo, useState } from "react";
import css from "./CatalogFilter.module.css";
import svg from "../../img/sprite.svg";
import brands from "../../helpers/makes.json";
import { useDispatch, useSelector } from "react-redux";
import {
	selectCatalog,
	// selectFilters,
} from "../../redux/catalogSelectors";
import { createPrice } from "../../helpers/priceMarkup.js";
import { interFilter } from "../../redux/filterSlice.js";

const initOpen = { brand: false, prices: false };
const sortedBrands = brands.sort();

export const CatalogFilter = () => {
	const [brand, setQuery] = useState("");
	const [price, setPrices] = useState("");
	const [mileageFrom, setMileageFrom] = useState("");
	const [mileageTo, setMileageTo] = useState("");
	const [isOpen, setOpen] = useState(initOpen);
	const cars = useSelector(selectCatalog);
	const dispatch = useDispatch();
	const handleOpen = (e) => {
		const type = e.currentTarget.dataset.type;
		setOpen((prev) => ({ ...initOpen, [type]: !prev[type] }));
	};
	const fixMileFrom = Number(mileageFrom).toLocaleString();
	console.log(Number(mileageFrom));
	const fixMileTO = mileageTo;
	console.log(typeof fixMileFrom);
	console.log(typeof fixMileTO.toLocaleString());
	const handleQuery = (e) => {
		const type = e.currentTarget.dataset.type;
		type === "brand" && setQuery(e.target.value);
		type === "mileFrom" && setMileageFrom(e.target.value);
		type === "mileTo" && setMileageTo(e.target.value);
	};
	const handlePick = (e) => {
		if (e.target.nodeName !== "LI") return;
		const type = e.currentTarget.dataset.type;
		const value = e.target.textContent;
		type === "brands" ? setQuery(value) : setPrices(value);
		setOpen(initOpen);
	};
	const priceArr = useMemo(() => createPrice(cars), [cars]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(interFilter({ brand, price, mileageFrom, mileageTo }));

		// setBrand('');
		// setPrice('');
		// setMileageFrom('');
		// setMileageTo('');
	};

	const handleCloseDropdowns = (e) => {
		if (
			e.target.dataset.type === "prices" ||
			e.target.dataset.type === "brand"
		)
			return;
		if (!isOpen.brand && !isOpen.prices) return;
		setOpen(initOpen);
	};

	document.addEventListener("click", handleCloseDropdowns);

	return (
		<div className={css.filters}>
			<form className={css.form} onSubmit={handleSubmit}>
				<div className={css.field}>
					<p className={css.title}>Car brand</p>
					<input
						className={`${css.input} ${css.brand}`}
						type="text"
						placeholder="Enter the text"
						id="brandSearch"
						data-type="brand"
						onClick={handleOpen}
						onChange={handleQuery}
						value={brand}
						autoComplete="off"
					/>
					<svg
						className={`${css.arrowSvg} ${
							isOpen.brand ? css.arrowDown : ""
						}`}
					>
						<use href={`${svg}#icon-arrow`}></use>
					</svg>
					{isOpen.brand && (
						<div className={css.filterListWrapper}>
							<ul
								className={css.filterList}
								onClick={handlePick}
								data-type="brands"
							>
								{sortedBrands
									.filter((item) =>
										item
											.toLowerCase()
											.includes(brand.toLowerCase().trim())
									)
									.map((item, index) => {
										return (
											<li className={css.filterItem} key={index}>
												{item}
											</li>
										);
									})}
							</ul>
						</div>
					)}
				</div>
				<div className={css.field}>
					<p className={css.title}>Price/ 1 hour</p>
					<div
						className={`${css.input} ${css.price}`}
						onClick={handleOpen}
						data-type="prices"
					>
						To {price === "" ? "" : price}$
					</div>
					<svg
						className={`${css.arrowSvg} ${
							isOpen.prices ? css.arrowDown : ""
						}`}
					>
						<use href={`${svg}#icon-arrow`}></use>
					</svg>
					{isOpen.prices && (
						<div className={css.filterListWrapper}>
							<ul
								className={css.filterList}
								onClick={handlePick}
								data-type="prices"
							>
								{priceArr.map((item, index) => {
									return (
										<li className={css.filterItem} key={index}>
											{item}
										</li>
									);
								})}
							</ul>
						</div>
					)}
				</div>
				<div className={css.mileage}>
					<p className={css.title}>Сar mileage / km</p>
					<p className={css.fromText}>From</p>
					<p className={css.toText}>To</p>
					<input
						className={css.mileageFiled}
						type="number"
						id="brandSearch"
						min={1}
						data-type="mileFrom"
						onChange={handleQuery}
						value={fixMileFrom}
						autoComplete="off"
					/>
					<input
						className={`${css.mileageFiled} ${css.to}`}
						type="number"
						id="brandSearch"
						min={Number(mileageFrom) + 1}
						data-type="mileTo"
						onChange={handleQuery}
						value={fixMileTO}
						autoComplete="off"
					/>
				</div>
				<button className={css.formBtn} type="submit">
					Search
				</button>
			</form>
		</div>
	);
};
