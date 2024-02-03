import { useState } from "react";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { PaginationButton } from "../PaginationButton/PaginationButton";
import css from "./CatalogList.module.css";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/catalogSelectors";
import { ModalWindow } from "../ModalWindow/ModalWindow";
export const CatalogList = ({ data }) => {
	const [isModal, setIsModal] = useState(false);
	const [modalData, setModalData] = useState(null);
	const [visible, setVisible] = useState(12);
	const isLoading = useSelector(selectIsLoading);
	const handlePagination = () => {
		setVisible((prev) => prev + 12);
	};
	const handleModal = (data) => {
		setIsModal(true);
		setModalData(data);
	};
	const handleClose = (e) => {
		setIsModal(false);
	};
	return (
		<>
			<ul className={css.list}>
				{data &&
					data
						.slice(0, visible)
						.map((car) => (
							<CatalogItem
								key={car.id}
								data={car}
								modal={handleModal}
							/>
						))}
			</ul>
			{!isLoading && visible <= data.length ? (
				<PaginationButton onClick={handlePagination} />
			) : null}
			{isModal && (
				<ModalWindow data={modalData} onClose={handleClose} />
			)}
		</>
	);
};
