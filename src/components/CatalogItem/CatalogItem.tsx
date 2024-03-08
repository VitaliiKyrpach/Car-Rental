import css from "./CatalogItem.module.css";
import svg from "../../img/sprite.svg";
import { FC, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/catalogSelectors";
import { Card, addCard, removeCard } from "../../redux/catalogSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
interface CatalogItemProps {
	data: Card;
	modal: (data: Card) => void;
}
export const CatalogItem: FC<CatalogItemProps> = ({
	data,
	modal,
}) => {
	const [like, setLike] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const favorites = useAppSelector(selectFavorites);
	const address = data.address.split(", ");
	const isLiked: boolean =
		!!favorites.length &&
		!!favorites.find((card) => card.id === data.id);

	useEffect(() => {
		isLiked ? setLike(true) : setLike(false);
	}, [isLiked]);

	const handleLike = () => {
		!isLiked
			? dispatch(addCard(data))
			: dispatch(removeCard(data.id));
		setLike(!like);
	};
	return (
		<li className={css.card}>
			<svg
				className={`${css.cardHeart} ${like && css.heartActive}`}
				onClick={handleLike}
			>
				{like ? (
					<use href={`${svg}#icon-heart-active`}></use>
				) : (
					<use href={`${svg}#icon-heart`}></use>
				)}
			</svg>
			<div className={css.imgWrapper}>
				<img className={css.cardImg} src={data.img} alt="car" />
			</div>
			<div className={css.title}>
				<div className={css.titleWrapper}>
					<p className={css.brand}>{data.make}</p>
					<p className={css.colorAccent}>
						<span className={css.carModel}>{data.model},</span>
					</p>
					<p>{data.year}</p>
				</div>
				<p>{data.rentalPrice}</p>
			</div>
			<div className={css.infoWrapper}>
				<ul className={css.infoList}>
					<li className={css.infoItem}>{address[1]}</li>
					<li className={css.infoItem}>{address[2]}</li>
					<li className={css.infoItem}>{data.rentalCompany}</li>
					<li className={`${css.infoItem} ${css.dots}`}>Premium</li>
				</ul>
				<ul className={css.infoList}>
					<li className={css.infoItem}>{data.type}</li>
					<li className={css.infoItem}>{data.make}</li>
					<li className={css.infoItem}>{data.mileage}</li>
					<li className={`${css.infoItem} ${css.dots}`}>
						{data.accessories[0]}
					</li>
				</ul>
			</div>
			<button
				type="button"
				className={css.cardBtn}
				onClick={() => modal(data)}
			>
				Learn more
			</button>
		</li>
	);
};
