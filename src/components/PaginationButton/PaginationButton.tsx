import { FC } from "react";
import css from "./PaginationButton.module.css";
interface PaginationButtonProps {
	onClick: () => void;
}
export const PaginationButton: FC<PaginationButtonProps> = ({
	onClick,
}) => {
	return (
		<button className={css.button} type="button" onClick={onClick}>
			Load more
		</button>
	);
};
