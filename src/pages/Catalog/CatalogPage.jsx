import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container/Container";
import { useEffect } from "react";
import { fetchCatalog } from "../../redux/catalogOperations";
import { selectCatalog } from "../../redux/catalogSelectors";
import { CatalogList } from "../../components/CatalogList/CatalogList";
import { CatalogFilter } from "../../components/CatalogFilter/CatalogFilter";

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
			<CatalogFilter/>
			<Container>
				<CatalogList data={data}/>
			</Container>
		</div>
	);
};

export default Catalog;
