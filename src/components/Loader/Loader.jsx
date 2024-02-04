import svg from "../../img/sprite.svg";
import css from "./Loader.module.css";
export const Loader = () => {
	return (
		<svg className={css.loader}>
			<use href={`${svg}#icon-loader`}></use>
		</svg>
	);
};
