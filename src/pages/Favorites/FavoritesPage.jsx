import css from "./FavoritesPage.module.css";
import { useSelector } from "react-redux";
import { Container } from "../../components/Container/Container";
import { selectFavorites } from "../../redux/catalogSelectors";
import { CatalogList } from "../../components/CatalogList/CatalogList";
import { CatalogFilter } from "../../components/CatalogFilter/CatalogFilter";

const Favorites = () => {
	const favorites = useSelector(selectFavorites);
	console.log(favorites);
	return (
		<div className={css.favorites}>
			<Container>
				<CatalogFilter />
				<CatalogList data={favorites} />
			</Container>
		</div>
	);
};

export default Favorites;
