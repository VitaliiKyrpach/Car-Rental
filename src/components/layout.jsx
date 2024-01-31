import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
};
