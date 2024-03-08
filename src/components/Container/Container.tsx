import { FC } from "react";
import css from "./Container.module.css";
interface ContainerProps {
	children: JSX.Element | JSX.Element[];
}
export const Container: FC<ContainerProps> = ({ children }) => {
	return <div className={css.mainContainer}>{children}</div>;
};
