import css from "./UserNav.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/catalogSelectors";
import { FC } from "react";
interface UserNavProps {
	page: "wide" | "menu";
	setOpen?: () => void;
}
interface ClassNameFuncProps {
	isActive: boolean;
}
export const UserNav: FC<UserNavProps> = ({ page, setOpen }) => {
	const classNameFunc = ({ isActive }: ClassNameFuncProps): string =>
		`${css.link} ${isActive && css.linkActive}`;
	const favorites = useSelector(selectFavorites);
	return (
		<div className={`${css.navBar} ${page === "wide" && css.wide}`}>
			<NavLink
				className={classNameFunc}
				// onClick={page === "menu" && setOpen}
				onClick={
					page === "menu" ? () => setOpen && setOpen() : undefined
				}
				to="/"
			>
				Home
			</NavLink>
			<NavLink
				className={classNameFunc}
				onClick={
					page === "menu" ? () => setOpen && setOpen() : undefined
				}
				to="/catalog"
			>
				Catalog
			</NavLink>
			<NavLink
				className={favorites.length ? classNameFunc : css.disabled}
				onClick={
					page === "menu" ? () => setOpen && setOpen() : undefined
				}
				to="/favorites"
			>
				Favorites
			</NavLink>
		</div>
	);
};
