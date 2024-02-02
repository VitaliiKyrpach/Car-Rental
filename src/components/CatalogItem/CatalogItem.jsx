import css from "./CatalogItem.module.css";
import svg from "../../img/sprite.svg";
import { useRef } from "react";

export const CatalogItem = ({ data }) => {
	const listRef = useRef(null);
	const address = data.address.split(", ");

	return (
		<li className={css.card}>
			<svg className={css.cardHeart}>
				<use href={`${svg}#icon-heart`}></use>
			</svg>
			<div className={css.imgWrapper}>
				<img className={css.cardImg} src={data.img} alt="car" />
			</div>
			<div className={css.title}>
				<div className={css.titleWrapper}>
					<p>{data.make}</p>
					<p className={css.colorAccent}>
						<span className={css.carModel}>{data.model},</span>
					</p>
					<p>{data.year}</p>
				</div>
				<p>{data.rentalPrice}</p>
			</div>
			<div className={css.infoWrapper}>
				<ul className={css.infoList} ref={listRef}>
					<li className={css.infoItem}>{address[1]}</li>
					<li className={css.infoItem}>{address[2]}</li>
					<li className={css.infoItem}>{data.rentalCompany}</li>
					<li className={`${css.infoItem} ${css.dots}`}>Premium</li>
				</ul>
				<ul className={css.infoList} ref={listRef}>
					<li className={css.infoItem}>{data.type}</li>
					<li className={css.infoItem}>{data.make}</li>
					<li className={css.infoItem}>{data.mileage}</li>
					<li className={`${css.infoItem} ${css.dots}`}>
						{data.accessories[0]}
					</li>
				</ul>
			</div>
			<button type="button" className={css.cardBtn}>
				Learn more
			</button>
		</li>
	);
};
