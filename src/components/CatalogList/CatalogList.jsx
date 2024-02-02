import { useState } from "react";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { PaginationButton } from "../PaginationButton/PaginationButton";
import css from "./CatalogList.module.css";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/catalogSelectors";
export const CatalogList = ({ data }) => {
	const [visible, setVisible] = useState(12);
	const isLoading = useSelector(selectIsLoading);
	const handlePagination = () => {
		setVisible((prev) => prev + 12);
	};
	console.log(isLoading);
	return (
		<>
			<ul className={css.list}>
				{data &&
					data
						.slice(0, visible)
						.map((car) => <CatalogItem key={car.id} data={car} />)}
			</ul>
			{!isLoading || (!isLoading && visible !== 36) ? (
				<PaginationButton onClick={handlePagination} />
			) : null}
		</>
	);
};
