import { useState } from "react";
import css from "./CatalogFilter.module.css";
import svg from "../../img/sprite.svg";
const initOpen = { brand: false, price: false };
export const CatalogFilter = () => {
	// const [categories, setCategories] = useState(null);
	// const [query, setQuery] = useState("");
	const [isOpen, setOpen] = useState(initOpen);
	// const handleOpen = (e) => {
	// 	const type = e.currentTarget.dataset.type;
	// 	setOpen((prev) => ({ ...initOpen, [type]: !prev[type] }));
	// };
	console.log(setOpen);
	return (
		<div className={css.filters}>
			<form className={css.form}>
				<div className={css.field}>
					<input
						className={`${css.input} ${css.brand}`}
						type="text"
						placeholder="Enter the text"
						id="brandSearch"
						data-type="brand"
						// onChange={handleQuery}
						// value={query}
					/>
					<svg
						className={`${css.arrowSvg} ${
							isOpen.brand ? css.arrowDown : ""
						}`}
					>
						<use href={`${svg}#icon-arrow`}></use>
					</svg>
					{/* {isOpen.brand && (
						<div className={css.filterListWrapper}>
							<ul
								className={css.filterList}
								onClick={handlePick}
								data-type="category"
							>
								{categories.map((item, index) => {
									return (
										<li className={css.filterItem} key={index}>
											{item}
										</li>
									);
								})}
							</ul>
						</div>
					)} */}
				</div>
				<div className={css.field}>
					<div
						className={`${css.input} ${css.price}`}
						// onClick={handleOpen}
						data-type="price"
					>
						To
						{/* {filters.category === ""
							? ""
							: filters.category} */}
						$
					</div>
					<svg
						className={`${css.arrowSvg} ${
							isOpen.brand ? css.arrowDown : ""
						}`}
					>
						<use href={`${svg}#icon-arrow`}></use>
					</svg>
					{/* {isOpen.price && (
						<div className={css.filterListWrapper}>
							<ul
								className={css.filterList}
								onClick={handlePick}
								data-type="category"
							>
								{categories.map((item, index) => {
									return (
										<li className={css.filterItem} key={index}>
											{item}
										</li>
									);
								})}
							</ul>
						</div>
					)} */}
				</div>
				<div className={css.mileage}>
					<p>From</p>
					<p className={css.toText}>To</p>
					<input
						className={css.mileageFiled}
						type="text"
						id="brandSearch"
						// data-type="brand"
						// onChange={handleQuery}
						// value={query}
					/>
					<input
						className={`${css.mileageFiled} ${css.to}`}
						type="text"
						id="brandSearch"
						// data-type="brand"
						// onChange={handleQuery}
						// value={query}
					/>
				</div>
				<button className={css.formBtn} type="submit">
					Search
				</button>
			</form>
		</div>
	);
};
