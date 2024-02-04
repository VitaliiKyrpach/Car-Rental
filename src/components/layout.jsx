import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Loader } from "./Loader/Loader";

export const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
};
