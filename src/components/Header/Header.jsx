import svg from '../../img/sprite.svg'
import css from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../Container/Container";

export const Header = () => {
	return (
		<header className={css.header}>
			<Container>
				<nav className={css.headerWrapper}>
					<Link className={css.logo} to="/">
					<svg className={css.logoSVG}>
						<use href={`${svg}#icon-logo`} ></use>
					</svg>
					<span className={css.text}>CarRental</span>
					</Link>
					<div className={css.navBar}>
						<NavLink className={css.link} to="/">
							Home
						</NavLink>
						<NavLink className={css.link} to="/catalog">
							Catalog
						</NavLink>
						<NavLink className={css.link} to="/favorites">
							Favorites
						</NavLink>
					</div>
				</nav>
			</Container>
		</header>
	);
};
