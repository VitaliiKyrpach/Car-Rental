import css from "./ModalWindow.module.css";
import svg from "../../img/sprite.svg";
export const ModalWindow = ({ data, onClose }) => {
	const address = data.address.split(", ");
	const conditions = data.rentalConditions.split("\n");
	const age = conditions[0].split(": ");
	conditions.shift();
	const fixMileage = data.mileage.toString().replace(/^(\d)/, "$1,");
	document.body.style.overflow = "hidden";
	const handleEscapeKey = (event) => {
		if (event.code === "Escape") {
			onClose();
			document.body.style.overflow = "scroll";
			return document.removeEventListener("keydown", handleEscapeKey);
		}
	};
	document.addEventListener("keydown", handleEscapeKey);
	const handleClose = (e) => {
		if (
			e.target.dataset.type === "backdrop" ||
			e.target.dataset.type === "close-modal"
		) {
			document.body.style.overflow = "scroll";
			onClose();
		}
	};
	return (
		<div
			className={css.backdrop}
			onClick={handleClose}
			data-type="backdrop"
		>
			<div className={css.modal}>
				<svg
					className={css.close}
					onClick={handleClose}
					data-type="close-modal"
				>
					<use href={`${svg}#icon-x`}></use>
				</svg>
				<img className={css.img} src={data.img} alt="car" />
				<div className={css.modalContent}>
					<div className={css.group}>
						<div className={css.title}>
							<p>{data.make}</p>
							<p className={css.colorAccent}>
								<span className={css.carModel}>{data.model},</span>
							</p>
							<p>{data.year}</p>
						</div>
						<div className={css.infoWrapper}>
							<ul className={css.infoList}>
								<li className={css.infoItem}>{address[1]}</li>
								<li className={css.infoItem}>{address[2]}</li>
								<li className={css.infoItem}>Id: {data.id}</li>
								<li className={css.infoItem}>Year: {data.year}</li>
								<li className={css.infoItem}>Type: {data.type}</li>
							</ul>
							<ul className={css.infoList}>
								<li className={css.infoItem}>
									Fuel Consumption: {data.fuelConsumption}
								</li>
								<li className={css.infoItem}>
									Engine Size: {data.engineSize}
								</li>
							</ul>
						</div>
						<p className={css.description}>{data.description}</p>
					</div>
					<div className={css.group}>
						<p className={css.text}>
							Accessories and functionalities:
						</p>
						<div className={css.infoWrapper}>
							<ul className={css.infoList}>
								{data.accessories.map((item, index) => (
									<li className={css.infoItem} key={index}>
										{item}
									</li>
								))}
							</ul>
							<ul className={`${css.infoList} ${css.dots}`}>
								{data.functionalities.map((item, index) => (
									<li className={css.infoItem} key={index}>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className={css.group}>
						<p className={css.text}>Rental Conditions: </p>
						<ul className={css.conditionsList}>
							<li className={css.condItem}>
								{age[0]}:{" "}
								<span className={`${css.colorAccent} ${css.bold}`}>
									{age[1]}
								</span>
							</li>
							{conditions.map((item, index) => (
								<li className={css.condItem} key={index}>
									{item}
								</li>
							))}
							<li className={css.condItem}>
								Mileage:{" "}
								<span className={`${css.colorAccent} ${css.bold}`}>
									{fixMileage}
								</span>
							</li>
							<li className={css.condItem}>
								Price:{" "}
								<span className={`${css.colorAccent} ${css.bold}`}>
									{data.rentalPrice.replace(/[^0-9]/g, "")}$
								</span>
							</li>
						</ul>
					</div>
					<button className={css.button} type="button">
						<a className={css.tel} href="tel:+380730000000">
							Rental car
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};
