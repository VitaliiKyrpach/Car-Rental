import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";

export const Header = () => {
	return (
		<header>
			<Container>
				<nav className={css.headerWrapper}>
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
