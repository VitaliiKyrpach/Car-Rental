import { FC, useState } from "react";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import { PaginationButton } from "../PaginationButton/PaginationButton";
import css from "./CatalogList.module.css";
// import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/catalogSelectors";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { Card } from "../../redux/catalogSlice";
import { useAppSelector } from "../../hooks";
interface CatalogListProps {
	data: Card[];
}
export const CatalogList: FC<CatalogListProps> = ({ data }) => {
	const [isModal, setIsModal] = useState<boolean>(false);
	const [modalData, setModalData] = useState<null | Card>(null);
	const [visible, setVisible] = useState<number>(12);
	const isLoading = useAppSelector(selectIsLoading);
	const handlePagination = () => {
		setVisible((prev) => prev + 12);
	};
	const handleModal = (data: Card) => {
		setIsModal(true);
		setModalData(data);
	};
	const handleClose = () => {
		setIsModal(false);
	};
	console.log(data);
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
