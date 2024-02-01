import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container/Container";
import { useEffect } from "react";
import { fetchCatalog } from "../../redux/catalogOperations";
import { selectCatalog } from "../../redux/catalogSelectors";
import { CatalogList } from "../../components/CatalogList/CatalogList";

const Catalog = () => {
	const data = useSelector(selectCatalog);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!data || !data.length) {
			dispatch(fetchCatalog());
		}
	}, [dispatch, data]);
	console.log(data);
	return (
		<div>
			<Container>
				<CatalogList />
				<p>CatalogPage</p>
			</Container>
		</div>
	);
};

export default Catalog;
