import svg from "../../img/sprite.svg";
import css from "./Header.module.css";
import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
// import { useSelector } from "react-redux";
// import { selectFavorites } from "../../redux/catalogSelectors";
import { UserNav } from "../UserNav/UserNav";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { useState } from "react";

export const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleOpen = () => {
		setIsOpen((prev) => !prev);
	};
	// const favorites = useSelector(selectFavorites);
	// const classNameFunc = ({ isActive }) =>
	// 	`${css.link} ${isActive && css.linkActive}`;
	return (
		<header className={css.header}>
			<Container>
				<nav className={css.headerWrapper}>
					<Link className={css.logo} to="/">
						<svg className={css.logoSVG}>
							<use href={`${svg}#icon-logo`}></use>
						</svg>
						<span className={css.text}>CarRental</span>
					</Link>
					{/* <div className={css.navBar}>
						<NavLink className={classNameFunc} to="/">
							Home
						</NavLink>
						<NavLink className={classNameFunc} to="/catalog">
							Catalog
						</NavLink>
						<NavLink
							className={
								favorites.length ? classNameFunc : css.disabled
							}
							to="/favorites"
						>
							Favorites
						</NavLink>
					</div> */}
					<UserNav page="wide" />
					<button className={css.burger} onClick={handleOpen}>
						<svg className={css.burgerSVG}>
							<use href={`${svg}#icon-burger-menu`}></use>
						</svg>
					</button>
				</nav>
			</Container>
			<MobileMenu open={isOpen} setopen={handleOpen} />
		</header>
	);
};
