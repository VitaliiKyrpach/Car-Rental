import { CatalogItem } from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";
export const CatalogList = ({data}) => {
	return <ul className={css.list}>
		{data && data.map(car=> <CatalogItem key={car.id} data={car}/>)}
	</ul>;
};
