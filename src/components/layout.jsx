import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<>
			<header>
				<nav>
					<NavLink className="link" to="/">
						Home
					</NavLink>
					<NavLink className="link" to="/catalog">
						Catalog
					</NavLink>
					<NavLink className="link" to="/favorites">
						Favorites
					</NavLink>
				</nav>
			</header>
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
};
