import css from "./FavoritesPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container/Container";
import {
	selectFavorites,
	selectFilters,
} from "../../redux/catalogSelectors";
import { CatalogList } from "../../components/CatalogList/CatalogList";
import { CatalogFilter } from "../../components/CatalogFilter/CatalogFilter";
import { filterCards } from "../../helpers/filterCards";
import { useEffect } from "react";
import { interFilter } from "../../redux/filterSlice";
import { Empty } from "../../components/Empty/Empty";

const Favorites = () => {
	const favorites = useSelector(selectFavorites);
	const dispatch = useDispatch();
	const filters = useSelector(selectFilters);
	const filteredData = filterCards(favorites, filters);

	useEffect(() => {
		const initFilters = {
			brand: "",
			price: null,
			mileageFrom: null,
			mileageTo: null,
		};
		dispatch(interFilter(initFilters));
	}, [dispatch]);

	return (
		<div className={css.favorites}>
			<Container>
				<CatalogFilter />
				{!filteredData.length && (
					<Empty case={`${favorites.length ? "empty" : "null"}`} />
				)}
				<CatalogList data={filteredData} />
			</Container>
		</div>
	);
};

export default Favorites;
