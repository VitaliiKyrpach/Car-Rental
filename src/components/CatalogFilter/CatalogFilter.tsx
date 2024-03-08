import {
	ChangeEvent,
	FormEvent,
	MouseEvent,
	useMemo,
	useState,
} from "react";
import css from "./CatalogFilter.module.css";
import svg from "../../img/sprite.svg";
import brands from "../../helpers/makes.json";
import { selectCatalog } from "../../redux/catalogSelectors";
import { createPrice } from "../../helpers/priceMarkup";
import { interFilter } from "../../redux/filterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

// interface IinitOpent {
// 	brand: boolean;
// 	prices: boolean;
// }
interface IinitOpent {
	[key: string]: boolean;
}
const initOpen: IinitOpent = { brand: false, prices: false };
const sortedBrands = brands.sort();

export const CatalogFilter = () => {
	const [brand, setQuery] = useState<string>("");
	const [price, setPrices] = useState<string>("");
	const [mileageFrom, setMileageFrom] = useState<string | number>("");
	const [mileageTo, setMileageTo] = useState<string | number>("");
	const [isOpen, setOpen] = useState<IinitOpent>(initOpen);
	const cars = useAppSelector(selectCatalog);
	const dispatch = useAppDispatch();
	const handleOpen = (e: MouseEvent<HTMLDivElement>) => {
		// if (!(e.target instanceof HTMLDivElement)) {
		// 	return;
		// }
		// if (!e.currentTarget.dataset) return;
		// const type: string = e.currentTarget.dataset.type;
		const type: string | undefined = e.currentTarget.dataset.type;
		if (typeof type === "undefined") {
			return;
		}
		setOpen((prev) => ({ ...initOpen, [type]: !prev[type] }));
	};

	const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
		const type = e.currentTarget.dataset.type;
		type === "brand" && setQuery(e.target.value);
		type === "mileFrom" && setMileageFrom(e.target.value);
		type === "mileTo" && setMileageTo(e.target.value);
	};
	const handlePick = (e: MouseEvent<HTMLUListElement>) => {
		if (!(e.target instanceof HTMLLIElement)) return;
		if (e.target.nodeName !== "LI") return;
		if (!e.target.textContent) return;
		const type = e.currentTarget.dataset.type;
		const value = e.target.textContent;
		type === "brands" ? setQuery(value) : setPrices(value);
		setOpen(initOpen);
	};
	const priceArr = useMemo(() => createPrice(cars), [cars]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(interFilter({ brand, price, mileageFrom, mileageTo }));
	};

	const handleCloseDropdowns = (e: Event): void => {
		if (!(e.target instanceof HTMLElement)) return;
		if (
			e.target.dataset.type === "prices" ||
			e.target.dataset.type === "brand"
		)
			return;
		if (!isOpen.brand && !isOpen.prices) return;
		setOpen(initOpen);
	};
	// const handleCloseDropdowns: EventListener = (e) => {
	// 	const event = e as MouseEvent<HTMLElement>;
	// 	const target = event.target as HTMLElement;
	// 	if (!target.dataset) return;
	// 	if (target.dataset.type === "prices" || target.dataset.type === "brand") return;
	// 	if (!isOpen.brand && !isOpen.prices) return;
	// 	setOpen(initOpen);
	// };

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
						<div className={`${css.filterListWrapper} ${css.brand}`}>
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
						<div className={`${css.filterListWrapper} ${css.price}`}>
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
						value={mileageFrom}
						autoComplete="off"
					/>
					<input
						className={`${css.mileageFiled} ${css.to}`}
						type="number"
						id="brandSearch"
						min={Number(mileageFrom) + 1}
						data-type="mileTo"
						onChange={handleQuery}
						value={mileageTo}
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
