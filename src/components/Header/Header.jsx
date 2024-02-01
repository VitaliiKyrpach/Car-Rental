import svg from "../../img/sprite.svg";
import css from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../Container/Container";

export const Header = () => {
	const classNameFunc = ({ isActive }) =>
		`${css.link} ${isActive && css.linkActive}`;
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
					<div className={css.navBar}>
						<NavLink className={classNameFunc} to="/">
							Home
						</NavLink>
						<NavLink className={classNameFunc} to="/catalog">
							Catalog
						</NavLink>
						<NavLink className={classNameFunc} to="/favorites">
							Favorites
						</NavLink>
					</div>
				</nav>
			</Container>
		</header>
	);
};
