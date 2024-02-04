import css from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container/Container";
import { useEffect } from "react";
import { fetchCatalog } from "../../redux/catalogOperations";
import {
	selectCatalog,
	selectFilters,
	selectIsLoading,
} from "../../redux/catalogSelectors";
import { CatalogList } from "../../components/CatalogList/CatalogList";
import { CatalogFilter } from "../../components/CatalogFilter/CatalogFilter";
import { filterCards } from "../../helpers/filterCards";
import { interFilter } from "../../redux/filterSlice";
import { Loader } from "../../components/Loader/Loader";
import { Empty } from "../../components/Empty/Empty";

const Catalog = () => {
	const data = useSelector(selectCatalog);
	const filters = useSelector(selectFilters);
	const isLoad = useSelector(selectIsLoading);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!data || !data.length) {
			dispatch(fetchCatalog());
		}
	}, [dispatch, data]);

	useEffect(() => {
		const initFilters = {
			brand: "",
			price: null,
			mileageFrom: null,
			mileageTo: null,
		};
		dispatch(interFilter(initFilters));
	}, [dispatch]);

	const filteredData = filterCards(data, filters);
	return (
		<div className={css.catalog}>
			<Container>
				<CatalogFilter />
				{isLoad && <Loader />}
				{data.length && !filteredData.length ? (
					<Empty case={"empty"} />
				) : null}
				<CatalogList data={filteredData} />
			</Container>
		</div>
	);
};

export default Catalog;
